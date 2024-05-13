const { v4: uuid } = require("uuid")
const PostsModel = require("../models/posts.models")
const { esbuildVersion } = require("vite")
class PostsController {
    /****************************
     * ALL POSTS CONTROLLER
     *****************************/
    static all_posts(req, res) {
        try {
            PostsModel.all_post_model((err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get posts",err })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    * SINGLE POSTS CONTROLLER
    *****************************/
    static single_posts(req, res) {
        try {
            const { id } = req.params;
            PostsModel.single_post_model(id, (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "failed to get single posts",err })
                }
                res.status(200).json(data)
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    * CREATE POSTS CONTROLLER
    *****************************/
    static create_posts(req, res) {
        try {
            const data = {
                post_id: uuid(),
                post_title: req.body.post_title,
                post_tags: req.body.post_tags,
                post_published: req.body.post_published,
                post_category: req.body.post_category,
                post_author: req.body.post_author,
                post_thumbnail: req.uploadedFileName,
                post_description: req.body.post_description,
                is_active: 1
            }
            PostsModel.create_post_model(data, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to create post",err })
                }
                res.status(201).json({ message: "post create success", id: data.post_id })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    * UPDATE POSTS CONTROLLER
    *****************************/
    static update_posts(req, res) {
        try {
            const { id } = req.params;
            const data = {
                post_title: req.body.post_title,
                post_tags: req.body.post_tags,
                post_published: req.body.post_published,
                post_category: req.body.post_category,
                post_author: req.body.post_author,
                post_thumbnail: req.body.post_thumbnail === undefined ? req.uploadedFileName : req.body.post_thumbnail,
                post_description: req.body.post_description,
                is_active: 1
            }
            PostsModel.update_post_model(data, id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to update posts",err })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "post not found!" })
                }
                res.status(200).json({ message: "post update success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
    /****************************
    * DELETE POSTS CONTROLLER
    *****************************/
    static delete_posts(req, res) {
        try {
            const { id } = req.params;
            PostsModel.delete_post_model(id, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "failed to delete posts",err })
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "post not found!" })
                }
                res.status(200).json({ message: "post delete success" })
            })
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = PostsController