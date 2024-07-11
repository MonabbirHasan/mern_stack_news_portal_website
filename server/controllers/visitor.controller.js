const VisitorModel = require("../models/visitor.models");
const { v4: uuid } = require("uuid");
class VisitorController {
  /**************************
   * GET ALL VISITOR
   **************************/
  static all_visitor(req, res) {
    try {
      VisitorModel.all_visitor_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all visitor" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**************************
   * GET SINGLE VISITOR
   **************************/
  static single_visitor(req, res) {
    try {
      const { id } = req.params;
      VisitorModel.single_visitor_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single visitor" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**************************
   *CREATE NEW VISITOR
   **************************/
  static create_visitor(req, res) {
    try {
      const data = {
        visitor_id: uuid(),
        visitor_count: req.body.visitor_count,
        visitor_ip: req.body.visitor_ip,
        visit_date: req.body.visit_date,
        user_agent: req.body.user_agent,
        page_visited: req.body.page_visited,
        session_id: req.body.session_id,
        country: req.body.country,
        city: req.body.city,
      };
      VisitorModel.create_visitor_model(data, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "failed to create visitor" });
        }
        res
          .status(201)
          .json({ message: "visitor create success", id: data.visitor_id });
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**************************
   * UPDATE VISITOR
   **************************/
  static update_visitor(req, res) {
    try {
      const { id } = req.params;
      const data = {
        visitor_count: req.body.visitor_count,
        visitor_ip: req.body.visitor_ip,
        visit_date: req.body.visit_date,
        user_agent: req.body.user_agent,
        page_visited: req.body.page_visited,
        session_id: req.body.session_id,
        country: req.body.country,
        city: req.body.city,
      };
      VisitorModel.update_visitor_model(data, id, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "failed to update visitor" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "visitor not found" });
        }
        res.status(200).json({ message: "visitor update success" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**************************
   * DELETE VISITOR
   **************************/
  static delete_visitor(req, res) {
    try {
      const { id } = req.params;
      VisitorModel.delete_visitor_model(id, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete visitor" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "visitor not found" });
        }
        res.status(200).json({ message: "visitor delete success" });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = VisitorController;
