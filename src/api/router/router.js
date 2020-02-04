import express from 'express';
import auth from '../auth/auth.js';
import axios from 'axios';
import { CRUD_API_ENDPOINT, isOverlapEvent } from './utils';

const router = express.Router()

router.get('/ping', (req, res) => {
    res.send('pong!!');
});

router.get('/check', auth, (req, res) => {
    return res.status(200).send("Login successful");
});

router.get('/list', auth, (req, res) => {
   if(!req.token){
    res.status(401).send("Unauthorized")
   }
    return axios({
        method: 'GET',
        url: `${CRUD_API_ENDPOINT}/peek`,
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.API_KEY
        }
    }).then((response) => {
        if (response && response.data) {
            const allEvents = [];
            let events = [];
            const obj = {}
            let index = 1
            const eventsUnsorted = response.data.message;
            eventsUnsorted.sort((a,b)=>new Date(a.data.dateTime)-new Date(b.data.dateTime))
            .forEach((message) => {
                const dateTime = message.data.dateTime.split('T')[0];
                if (!obj[dateTime]) {
                    obj[dateTime] = index;
                    index++;
                    events.push(message.data)   
                    allEvents.push({
                        date: message.data.dateTime,
                        events
                    })
                    events = [];
                }
                else {
                    allEvents[obj[dateTime]-1].events.push(message.data)
                }
            });
            res.status(200).send(allEvents);
        }
        else {
            res.send([]);
        }
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data)
    })
});

router.post('/create', auth, (req, res) => {
    const { body } = req;
    if(!req.token){
        res.status(401).send("Unauthorized")
       }
    return axios({
        method: 'GET',
        url: `${CRUD_API_ENDPOINT}/peek`,
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.API_KEY
        }
    }).then((response) => {
            const isOverlap = isOverlapEvent(response.data.message, body)
            if(isOverlap) {
                res.status(400).send("Events can not overlap, please choose a different time slot") 
            }
            else {
                return axios({
                    method: 'POST',
                    url: `${CRUD_API_ENDPOINT}/create/${body.id}`,
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-KEY": process.env.API_KEY
                    },
                    data: {data: body}
                }).then((response) => {
            
                    if (response && response.data) {
                        res.status(201).send(response.data);
                    }
                }).catch((error) => {
                    res.status(error.response.status).send(error.response.data)
                });
            }
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data)
    });
});

router.post('/update', auth, (req, res) => {
    const { body } = req;
    if(!req.token){
        res.status(401).send("Unauthorized")
       }
    return axios({
        method: 'GET',
        url: `${CRUD_API_ENDPOINT}/peek`,
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.API_KEY
        }
    }).then((response) => {
            const isOverlap = isOverlapEvent(response.data.message, body, body.id)
            if(isOverlap) {
                res.status(400).send("Events can not overlap, please choose a different time slot") 
            }
            else {
                return axios({
                    method: 'PUT',
                    url: `${CRUD_API_ENDPOINT}/update/${body.id}`,
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-KEY": process.env.API_KEY
                    },
                    data: {data: body}
                }).then((response) => {
                    if (response && response.data) {
                        res.status(200).send(response.data);
                    }
                }).catch((error) => {
                    res.status(error.response.status).send(error.response.data)
                });
            }
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data)
    });
});

router.delete('/delete/:id', auth, (req, res) => {
    if(!req.token){
        res.status(401).send("Unauthorized")
       }
    return axios({
        method: 'DELETE',
        url: `${CRUD_API_ENDPOINT}/remove/${req.params.id}`,
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.API_KEY
        }
      }).then((response) => {
        if (response && response.data) {
            res.status(200).send(response.data);
        }
    }).catch((error) => {
        res.status(400).send({ error })
    });
});

export default router;