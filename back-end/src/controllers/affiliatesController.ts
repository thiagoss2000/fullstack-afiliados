import { Request, Response } from "express";
import fs from "fs";
import dotenv from 'dotenv';
import services from "../services/affiliatesServices.js";
dotenv.config()

export default async function sendData(req: Request,res: Response) {

  const localFile = `${process.env.DATA_TEMP}${req.file?.filename}`
  
  try {
    const listFile = fs.readFileSync(localFile, 'utf8');
    const arrFiles = listFile.split(/\r?\n/);
    const error = await services.saveData(arrFiles);
    fs.unlinkSync(localFile);
    if (!error) {
      res.sendStatus(200);
    } else {
      res.status(error.status).send(error.message);
    }

  } catch(err) {
    console.error(err);
    res.status(401).send("type not acceptable!");
  }
}

export async function searchTransactions(req: Request, res: Response) {
  const sellerSelected = req.query.seller;
  const sellers = await services.searchSellers();
  const transactions = await services.searchTransactions(sellerSelected.toString());

  res.send({ transactions, sellers });
}