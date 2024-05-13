const { v4: uuid } = require('uuid')
const CategoryModel = require('../models/category.models')
class CategoryController {
    /************************
     *CREATE CATEGORY MODELS
     *************************/
    static all_category(req, res) {
        try {
            CategoryModel.all_category_model((err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get category", err })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /************************
     *CREATE CATEGORY MODELS
     *************************/
    static single_category(req, res) {
        try {
            const { id } = req.params;
            CategoryModel.single_category_model(id, (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get single category", err })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /************************
     *CREATE CATEGORY MODELS
     *************************/
    static create_category(req, res) {
        try {
            const data = {
                category_name: req.body.category_name,
                category_sub: req.body.category_sub,
                is_active: 1
            }
            CategoryModel.create_category_model(data, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get category", err })
                }
                res.status(201).json({ message: "category create success", id: data.category_id })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /************************
     *CREATE CATEGORY MODELS
     *************************/
    static update_category(req, res) {
        try {
            const data = req.body;
            const { id } = req.params;
            CategoryModel.update_category_model(data, id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to update category", err })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "category not found!" })
                }
                res.status(200).json({ message: 'category update success' })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /************************
     *CREATE CATEGORY MODELS
     *************************/
    static delete_category(req, res) {
        try {
            const { id } = req.params;
            CategoryModel.delete_category_model(id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to delete category", err })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "category not found!" })
                }
                res.status(200).json({ message: 'category delete success' })
            })
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = CategoryController;