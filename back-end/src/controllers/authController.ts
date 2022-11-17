import { Request, Response } from "express";
import * as authService from "../services/authServices.js"

export async function signUp(req: Request, res: Response) {
  const { username, password } = req.body;  

  await authService.signUp({ username, password});

  res.status(201).send({message: "User created successfully"});   
}

export async function signIn (req: Request, res: Response){
  const { username, password } = req.body;

  const token = await authService.signIn({ username, password })

  res.status(200).send({ message: "Login successful", token, username });    
}