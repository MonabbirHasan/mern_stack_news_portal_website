const db = require("../config/db")
const path = require("path")
const fs = require("fs").promises
class PostsModel {
    /****************************
     * ALL POSTS MODEL
     *****************************/
    static all_post_model(callback) {
        const sql = "SELECT * FROM posts";
        db.query(sql, callback)
    }
    /****************************
    * SINGLE POSTS MODEL
    *****************************/
    static single_post_model(id, callback) {
        const sql = "SELECT * FROM posts WHERE post_id=?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const msg = result[0]
                callback(null, msg)
            }
        })
    }
    /****************************
    * CREATE POSTS MODEL
    *****************************/
    static create_post_model(data, callback) {
        const sql = "INSERT INTO posts SET?"
        db.query(sql, data, callback)
    }
    /****************************
    * UPDATE POSTS MODEL
    *****************************/
    static update_post_model(data, id, callback) {
        const sql = "UPDATE posts SET? WHERE post_id=?"
        db.query(sql, [data, id], callback)
    }
    /****************************
    * DELETE POSTS MODEL
    *****************************/
    static delete_post_model(id, callback) {
        const sql = "SELECT * FROM posts WHERE post_id=?";
        db.query(sql, [id], async (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                try {
                    if (results.length === 0) {
                        callback(new Error("No record found with the given id"), null);
                        return;
                    }
                    const msg = results[0].post_thumbnail;
                    if (msg) {
                        const fullPath = path.join(
                            __dirname,
                            "..",
                            "public",
                            "uploads",
                            "blog_img",
                            msg
                        );
                        await fs.unlink(fullPath);
                    }
                    // Delete the record from the database
                    const deleteQuery = "DELETE FROM posts WHERE post_id=?";
                    db.query(deleteQuery, [id], (err) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, msg);
                        }
                    });
                } catch (error) {
                    console.error(error);
                }
            }
        });

    }
}
module.exports = PostsModel;