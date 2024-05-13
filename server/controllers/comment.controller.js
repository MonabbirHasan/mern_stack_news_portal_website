const { v4: uuid } = require('uuid')
const CommentModel = require('../models/comment.models')
class CommentController {
    /***********************
    *ALL COMMENT CONTROLLER
    **********************/
    static all_comment(req, res) {
        try {
            CommentModel.all_comment_model((err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get comment", err });
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    *SINGLE COMMENT CONTROLLER
    ***************************/
    static single_comment(req, res) {
        try {
            const { id } = req.params;
            CommentModel.single_comment_model(id, (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get single comment", err });
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /*****************************
    *CREATE COMMENT CONTROLLER
    ******************************/
    static create_comment(req, res) {
        try {
            const data = {
                comment_content: req.body.comment_content,
                comment_created: req.body.comment_created,
                comment_reply: req.body.comment_reply,
                comment_post: req.body.comment_post,
                comment_author: req.body.comment_author,
                is_active: 1
            }
            CommentModel.create_comment_model(data, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to create comment", err });
                }
                res.status(201).json({ message: "comment create success", id: data.comment_id })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    *UPDATE COMMENT CONTROLLER
    *****************************/
    static update_comment(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            CommentModel.update_comment_model(data, id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to update comment", err });
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "comment not found!" })
                }
                res.status(200).json({ message: "comment update success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    *DELETE COMMENT CONTROLLER
    ***************************/
    static delete_comment(req, res) {
        try {
            const { id } = req.params;
            CommentModel.delete_comment_model(id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to delete comment" });
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "comment not found!" })
                }
                res.status(200).json({ message: "comment delete success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = CommentController