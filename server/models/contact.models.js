const db = require("../config/db")
class ContactModel {
    /***********************
     *ALL CONTACT MODEL
     ***********************/
    static all_contact_model(callback) {
        const sql = "SELECT * FROM contacts";
        db.query(sql, callback)
    }
    /***********************
     *SINGLE CONTACT MODEL
     ***********************/
    static single_contact_model(id, callback) {
        const sql = "SELECT * FROM contacts WHERE contact_id=?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const msg = result[0];
                callback(null, msg)
            }
        })
    }
    /***********************
     *CREATE CONTACT MODEL
     ***********************/
    static create_contact_model(data, callback) {
        const sql = "INSERT INTO contacts SET?"
        db.query(sql, data, callback)
    }
    /***********************
     *UPDATE CONTACT MODEL
     ***********************/
    static update_contact_model(data, id, callback) {
        const sql = "UPDATE contacts SET? WHERE contact_id=?"
        db.query(sql, [data, id], callback)
    }
    /***********************
     *DELETE CONTACT MODEL
     ***********************/
    static delete_contact_model(id, callback) {
        const sql = "DELETE FROM contacts WHERE contact_id=?"
        db.query(sql, [id], callback)
    }
}
module.exports = ContactModel;