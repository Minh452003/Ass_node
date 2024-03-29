import Joi from "joi";
import Service from "../model/service.js";
const ServiceSchema = Joi.object({
    id: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string(),
})

export const getAll = async (req, res) => {
    try {
        const data = await Service.find();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Service.findById(id);
        if (data === 0) {
            return res.status(400).json({
                message: "Hiện bài viết thất bại",
            })
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = ServiceSchema.validate(body);
        if (error) {
            return res.status(200).json({
                message: error.details[0].message,
            })
        }
        const data = await Service.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm bài viết thất bại"
            })
        }
        return res.status(200).json({
            message: "Thêm bài viết thành công",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Service.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Xoá bài viết thành công",
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const { error } = ServiceSchema.validate(body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const data = await Service.findByIdAndUpdate({ _id: id }, body, {
            new: true,
        });
        if (data.length === 0) {
            return res.status(400).json({
                message: "Cập nhật bài viết thất bại",
            })
        }
        return res.status(200).json({
            message: "Cập nhật bài viết thành công",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}