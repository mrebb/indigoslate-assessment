import createError from 'http-errors'

export default (req, res, next) => {
  let {authorization} = req.headers
  if(!authorization)
    return next(createError(400, 'AUTH ERROR: no authorization header'))

  let encoded = authorization.split('basic ')[1]
  if(!encoded) return next(createError(400, 'AUTH ERROR: not basic auth'))

  let decoded = Buffer.from(encoded, 'base64').toString();
  const [username, password] = decoded.split(':');
  if(!username || !password) {
    return next(createError(401, 'AUTH ERROR: username or password missing'));
  }
  else if(username === process.env.USERNAME && password === process.env.PASSWORD) {
    req.token = authorization;
    next();
  }
  else{
    next({status:401,statusMessage:'Unauthorized',message:'Invalid User ID/Password'});
  }
}
