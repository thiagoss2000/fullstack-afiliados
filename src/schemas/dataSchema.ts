import joi from "joi";

export const dataSchema = joi.object({
  type: joi.number().required(),
  date: joi.string().required(),
  product: joi.string().required(),
  price: joi.number().required(),
  name: joi.string().required()
});