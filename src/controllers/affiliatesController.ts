import { Request, Response } from "express";
import fs from "fs";
import dotenv from 'dotenv';
import { sanitizer } from "../services/affiliatesServices";
dotenv.config()

export default async function sendData(req: Request,res: Response) {

  const localFile = `${process.env.DATA_TEMP}${req.file?.filename}`
  
  try {
    const data = fs.readFileSync(localFile, 'utf8');
    const linhas = data.split(/\r?\n/);

    console.log(linhas);
    console.log(sanitizer(linhas));

    fs.unlinkSync(localFile);
    res.sendStatus(200);

  } catch(err) {
    
    console.error(err);
    res.sendStatus(400);
  }
}