const AdminTmpModel = require("../models/admin_tmp.models");
const { v4: uuidv4 } = require("uuid")
class AdminTmpController {
    /*************************
     * ALL ADMIN TMP
     ************************/
    static all_admin_tmp(req, res) {
        try {
            AdminTmpModel.all_admin_tmp_model((err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get admin tmp" })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /*************************
     * SINGLE ADMIN TMP
     ************************/
    static single_admin_tmp(req, res) {
        try {
            const { id } = req.params;
            AdminTmpModel.single_admin_tmp_model(id, (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get single admin tmp" })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /*************************
     * CREATE ADMIN TMP
     ************************/
    static create_admin_tmp(req, res) {
        try {
            const data = {
                template_id: uuidv4(),
                template_title: req.body.template_title,
                template_name: req.body.template_name,
                template_price: req.body.template_price,
                template_thumbnail: req.body.template_thumbnail,
                template_gallery: req.body.template_gallery,
                template_desc: req.body.template_desc,
                template_down_uri: req.body.template_down_uri,
                template_tech_stack: req.body.template_tech_stack,
                template_usecase: req.body.template_usecase,
                template_ui_framework: req.body.template_ui_framework,
                template_backend: req.body.template_backend,
                template_free: req.body.template_free,
                template_downloads: req.body.template_downloads,
                template_category: req.body.template_category,
                template_type: req.body.template_type,
                template_author: req.body.template_author,
                template_sold: req.body.template_sold,
                template_status: req.body.template_status
            }
            AdminTmpModel.create_admin_tmp_model(data, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to create admin tmp" })
                }
                res.status(201).json({ message: "admin template create success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /*************************
     * UPDATE ADMIN TMP
     ************************/
    static update_admin_tmp(req, res) {
        try {
            const { id } = req.params;
            const data = {
                template_title: req.body.template_title,
                template_name: req.body.template_name,
                template_price: req.body.template_price,
                template_thumbnail: req.body.template_thumbnail,
                template_gallery: req.body.template_gallery,
                template_desc: req.body.template_desc,
                template_down_uri: req.body.template_down_uri,
                template_tech_stack: req.body.template_tech_stack,
                template_usecase: req.body.template_usecase,
                template_ui_framework: req.body.template_ui_framework,
                template_backend: req.body.template_backend,
                template_free: req.body.template_free,
                template_downloads: req.body.template_downloads,
                template_category: req.body.template_category,
                template_type: req.body.template_type,
                template_author: req.body.template_author,
                template_sold: req.body.template_sold,
                template_status: req.body.template_status
            }
            AdminTmpModel.update_admin_tmp_model(data, id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to update admin tmp" })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "not found admin tmp" })
                }
                res.status(200).json({ message: "admin template update success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /*************************
     * DELETE ADMIN TMP
     ************************/
    static delete_admin_tmp(req, res) {
        try {
            const { id } = req.params;
            AdminTmpModel.delete_admin_tmp_model(id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to delete admin tmp" })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "not found admin tmp" })
                }
                res.status(200).json({ message: "admin template delete success" })
            })
        } catch (error) {
            console.error(error)
        }
    }

}
module.exports = AdminTmpController