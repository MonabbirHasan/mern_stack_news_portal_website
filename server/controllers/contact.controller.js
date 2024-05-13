const { v4: uuid } = require("uuid")
const ContactModel = require("../models/contact.models")
class ContactController {
    /***********************
     *ALL CONTACT CONTROLLER
     ***********************/
    static all_contact(req, res) {
        try {
            ContactModel.all_contact_model((err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get contact", err })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
     *SINGLE CONTACT CONTROLLER
     ****************************/
    static single_contact(req, res) {
        try {
            const { id } = req.params;
            ContactModel.single_contact_model(id, (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get single contact", err })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
     *CREATE CONTACT CONTROLLER
     ****************************/
    static create_contact(req, res) {
        try {
            const data = {
                contact_id: uuid(),
                contact_name: req.body.contact_name,
                contact_email: req.body.contact_email,
                contact_subject: req.body.contact_subject,
                contact_message: req.body.contact_message,
                is_active: 1
            }
            ContactModel.create_contact_model(data, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to create contact", err })
                }
                res.status(201).json({ message: "contact create success", id: data.contact_id })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /**************************
     *UPDATE CONTACT CONTROLLER
     **************************/
    static update_contact(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            ContactModel.update_contact_model(data, id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to update contact", err })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "contact not found!" })
                }
                res.status(200).json({ message: "contact update success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
     *DELETE CONTACT CONTROLLER
     ****************************/
    static delete_contact(req, res) {
        try {
            const { id } = req.params;
            ContactModel.delete_contact_model(id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to delete contact", err })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "contact not found!" })
                }
                res.status(200).json({ message: "contact delete success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = ContactController;