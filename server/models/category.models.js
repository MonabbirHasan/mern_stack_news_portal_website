const db = require("../config/db")
class CategoryModel {
    /************************
     *ALL CATEGORY MODELS
     *************************/
    static all_category_model(callback) {
        const sql = "SELECT * FROM category";
        db.query(sql, callback)
    }
    /************************
     *SINGLE CATEGORY MODELS
     *************************/
    static single_category_model(id, callback) {
        const sql = "SELECT * FROM category WHERE category_id=?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                const msg = result[0]
                callback(null, msg)
            }
        })
    }
    /************************
     *CREATE CATEGORY MODELS
     *************************/
    static create_category_model(data, callback) {
        const sql = "INSERT INTO category SET?"
        db.query(sql, data, callback)
    }
    /************************
     *UPDATE CATEGORY MODELS
     *************************/
    static update_category_model(data, id, callback) {
        const sql = "UPDATE category SET? WHERE category_id=?"
        db.query(sql, [data, id], callback)
    }
    /************************
     *DELETE CATEGORY MODELS
     *************************/
    static delete_category_model(id, callback) {
        const sql = "DELETE FROM category WHERE category_id=?"
        db.query(sql, [id], callback)
    }
}
module.exports = CategoryModel