const db = require("../config/db")
class UserModel {
    /**************************
     * GET USER MODEL
     **************************/
    static all_user_model(callback) {
        const sql = "SELECT * FROM users";
        db.query(sql, callback)
    }
    /**************************
     * SINGLE USER MODEL
     **************************/
    static single_user_model(id, callback) {
        const sql = "SELECT * FROM users WHERE user_id=?";
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const msg = result[0]
                callback(null, msg)
            }
        })
    }
    /**************************
     * CREATE USER MODEL
     **************************/
    static create_user_model(data, callback) {
        const sql = "INSERT INTO users SET?"
        db.query(sql, data, callback)
    }
    /***********************************
    * FIND BY EMAIL PASSWORD USER MODEL
    ***********************************/
    static FindByEmailPass(data, callback) {
        const sql = "SELECT * FROM users WHERE user_email=? AND user_password=?";
        db.query(sql, [data.user_email, data.user_password], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                const msg = results[0];
                callback(msg);
            }
        });
    }
    /**************************
    * FIND BY EMAIL USER MODEL
    ***************************/
    static FindByEmail(email, callback) {
        const sql = "SELECT * FROM users WHERE user_email=?";
        db.query(sql, [email], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                const msg = results[0];
                callback(msg);
            }
        });
    }
    /**************************
     * UPDATE USER MODEL
     **************************/
    static update_user_model(data, id, callback) {
        const sql = "UPDATE users SET? WHERE user_id=?"
        db.query(sql, [data, id], callback)
    }
    /**************************
     * DELETE USER MODEL
     **************************/
    static delete_user_model(id, callback) {
        const sql = "DELETE FROM users WHERE user_id=?"
        db.query(sql, [id], callback)
    }
}
module.exports = UserModel