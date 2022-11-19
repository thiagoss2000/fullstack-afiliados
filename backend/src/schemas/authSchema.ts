import joi from "joi";

export const authSchema = joi.object({
  username: joi.string().min(6).required(),
  password: joi.string().min(8).required()
});