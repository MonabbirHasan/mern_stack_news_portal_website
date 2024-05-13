const db = require("../config/db")
class CommentModel {
    /***********************
     *ALL COMMENT MODEL
     **********************/
    static all_comment_model(callback) {
        const sql = "SELECT * FROM comments"
        db.query(sql, callback)
    }
    /***********************
    *SINGLE COMMENT MODEL
    **********************/
    static single_comment_model(id, callback) {
        const sql = "SELECT * FROM comments WHERE comment_id=?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const msg = result[0]
                callback(null, msg)
            }
        })
    }
    /***********************
    *CREATE COMMENT MODEL
    **********************/
    static create_comment_model(data, callback) {
        const sql = "INSERT INTO comments SET?"
        db.query(sql, data, callback)
    }
    /***********************
    *UPDATE COMMENT MODEL
    **********************/
    static update_comment_model(data, id, callback) {
        const sql = "UPDATE comments SET? WHERE comment_id=?"
        db.query(sql, [data, id], callback)
    }
    /***********************
    *DELETE COMMENT MODEL
    **********************/
    static delete_comment_model(id, callback) {
        const sql = "DELETE FROM comments WHERE comment_id=?"
        db.query(sql, [id], callback)
    }

}
module.exports = CommentModel