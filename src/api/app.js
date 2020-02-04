import express from 'express';
import cors from 'cors';
import router from './router/router';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// API
app.use(router);
let server = false;

//Start and stop server
module.exports = {
  start: (port) => {
    if(!server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on ' + port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close(() => {
      console.log('Server has closed');
    });
  },
  server: app,
};