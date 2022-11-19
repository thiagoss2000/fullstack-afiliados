import { Request, Response } from "express";
import * as authService from "../services/authServices.js"

export async function signUp(req: Request, res: Response) {
  const { username, password } = req.body;  

  const error = await authService.signUp({ username, password });
  if (error) res.status(error.status).send(error.message);

  res.status(201).send({message: "User created successfully"});   
}

export async function signIn (req: Request, res: Response){
  const { username, password } = req.body;

  const token = await authService.signIn({ username, password })
  if (!token) return res.status(401).send("authentication failure!")

  res.status(200).send({ message: "Login successful", token, username });    
}