import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.post('/', function (req, res, next) {
    console.log('POST V1 REQ.body WEBHOOK');
    console.log(req.body);
    res.send('POST v1 OK');
});

export default router;
