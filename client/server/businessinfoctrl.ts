import {Request, Response, Router} from "express";
import {json, ParsedAsJson} from "body-parser";
import {BusinessInfo} from './businessinfomodel';

const router: Router = Router();


insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }




export const BusinessInfoCtrl:Router = router;
