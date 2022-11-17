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

    services.saveData(arrFiles);

    fs.unlinkSync(localFile);
    res.sendStatus(200);

  } catch(err) {
    
    console.error(err);
    res.sendStatus(400);
  }
}

export async function searchSellers(req: Request, res: Response) {
  const sellers = await services.searchSellers();

  res.send(sellers);
}

export async function searchTransactions(req: Request, res: Response) {
  const seller = req.query.seller;
  const transactions = await services.searchTransactions(seller.toString());

  res.send(transactions);
}