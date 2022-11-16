import { Request, Response } from "express";
import fs from "fs";
import dotenv from 'dotenv';
import { saveData } from "../services/affiliatesServices.js";
dotenv.config()

export default async function sendData(req: Request,res: Response) {

  const localFile = `${process.env.DATA_TEMP}${req.file?.filename}`
  
  try {
    const listFile = fs.readFileSync(localFile, 'utf8');
    const arrFiles = listFile.split(/\r?\n/);

    saveData(arrFiles);

    fs.unlinkSync(localFile);
    res.sendStatus(200);

  } catch(err) {
    
    console.error(err);
    res.sendStatus(400);
  }
}