import Joi from "joi"
export const productSchema = Joi.object({
    id: Joi.string(),
    duan: Joi.string().required(),
    name: Joi.string().required(),
    linkgit: Joi.string(),
    linkprv: Joi.string(),
    image: Joi.string().required(),
    description: Joi.string(),
    categoryId: Joi.string().required(),
    createdAt: Joi.date().default(() => new Date()),
    updatedAt: Joi.date().default(() => new Date()),
})