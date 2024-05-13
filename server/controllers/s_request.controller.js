const { v4: uuid } = require("uuid")
const ServiceRequestModel = require("../models/s_request.models")
class SRequestController {
    /***************************
     *ALL SERVICE REQUEST
     ***************************/
    static all_service_request(req, res) {
        try {
            ServiceRequestModel.all_service_request_model((err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get service request" })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /***************************
     *SINGLE SERVICE REQUEST
     ***************************/
    static single_service_request(req, res) {
        try {
            const { id } = req.params;
            ServiceRequestModel.single_service_request_model(id, (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get single service request" })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /***************************
     *CREATE SERVICE REQUEST
     ***************************/
    static create_service_request(req, res) {
        try {
            const data = {
                s_request_id: uuid(),
                s_user_name: req.body.s_user_name,
                s_user_phone: req.body.s_user_phone,
                s_user_email: req.body.s_user_email,
                s_service_name: req.body.s_service_name,
                s_user_message: req.body.s_user_message,
            };
            ServiceRequestModel.create_service_request_model(data, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to create service request" })
                }
                res.status(201).json({ message: "service request create success", id: data.s_request_id })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /***************************
     *UPDATE SERVICE REQUEST
     ***************************/
    static update_service_request(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            ServiceRequestModel.update_service_request_model(data, id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to update service request" })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "service request not found!" })
                }
                res.status(201).json({ message: "service request update success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /***************************
     *DELETE SERVICE REQUEST
     ***************************/
    static delete_service_request(req, res) {
        try {
            const { id } = req.params;
            ServiceRequestModel.delete_service_request_model(id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to delete service request" })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "service request not found!" })
                }
                res.status(201).json({ message: "service request delete success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = SRequestController