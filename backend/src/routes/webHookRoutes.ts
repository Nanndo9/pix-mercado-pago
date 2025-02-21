import { Router,Request,Response,NextFunction } from "express";

const router = Router();

router.get('/', function(req:Request, res:Response, next:NextFunction) {
    console.log("GET v1 REQ.body WEBHOOK")
    console.log(req.body)

    res.send("GET v1 OK");
});

router.post('/', function(req, res, next) {
    console.log("POST V1 REQ.body WEBHOOK")
    console.log(req.body)
    res.send("POST v1 OK");
});

export default router;