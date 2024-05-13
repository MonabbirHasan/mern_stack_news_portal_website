const db = require("../config/db")
class ServiceRequestModel {
    /***************************
     *ALL SERVICE REQUEST MODEL
     ***************************/
    static all_service_request_model(callback) {
        const sql = "SELECT * FROM s_request"
        db.query(sql, callback)
    }
    /*******************************
     *SINGLE SERVICE REQUEST MODEL
     *******************************/
    static single_service_request_model(id, callback) {
        const sql = "SELECT * FROM s_request WHERE s_request_id=?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const msg = result[0]
                callback(null, msg)
            }
        })
    }
    /*******************************
     *CREATE SERVICE REQUEST MODEL
     *******************************/
    static create_service_request_model(data, callback) {
        const sql = "INSERT INTO s_request SET?"
        db.query(sql, data, callback)
    }
    /********************************
     *UPDATE SERVICE REQUEST MODEL
     ********************************/
    static update_service_request_model(data, id, callback) {
        const sql = "UPDATE s_request SET? WHERE s_request_id=?"
        db.query(sql, [data, id], callback)
    }
    /********************************
     *DELETE SERVICE REQUEST MODEL
     ********************************/
    static delete_service_request_model(id, callback) {
        const sql = "DELETE FROM s_request WHERE s_request_id=?"
        db.query(sql, [id], callback)
    }
}
module.exports = ServiceRequestModel