const db = require("../config/db")
class AdminTmpModel {
    /*************************
     * ALL ADMIN TMP MODEL
     ************************/
    static all_admin_tmp_model(callback) {
        const sql = "SELECT * FROM admin_tmp"
        db.query(sql, callback)
    }
    /*************************
     * SINGLE ADMIN TMP MODEL
     ************************/
    static single_admin_tmp_model(id, callback) {
        const sql = "SELECT * FROM admin_tmp admin_tmp_id=?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const msg = result[0]
                callback(null, msg)
            }
        })
    }
    /*************************
     * CREATE ADMIN TMP MODEL
     ************************/
    static create_admin_tmp_model(data, callback) {
        const sql = "INSERT INTO admin_tmp SET?"
        db.query(sql, data, callback)
    }
    /*************************
     * UPDATE ADMIN TMP MODEL
     ************************/
    static update_admin_tmp_model(data, id, callback) {
        const sql = "UPDATE admin_tmp SET? admin_tmp_id=?"
        db.query(sql, [data, id], callback)
    }
    /*************************
     * DELETE ADMIN TMP MODEL
     ************************/
    static delete_admin_tmp_model(id, callback) {
        const sql = "DELETE FROM admin_tmp admin_tmp_id=?"
        db.query(sql, [id], callback)
    }
}
module.exports = AdminTmpModel