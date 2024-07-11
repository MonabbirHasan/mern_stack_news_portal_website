const { CabinSharp } = require("@mui/icons-material");
const db = require("../config/db");
class VisitorModel {
  /**************************
   * GET ALL VISITOR MODEL
   **************************/
  static all_visitor_model(callback) {
    const sql = "SELECT * FROM vistor";
    db.query(sql, callback);
  }
  /**************************
   * GET SINGLE VISITOR MODEL
   **************************/
  static single_visitor_model(id, callback) {
    const sql = "SELECT * FROM visitor WHERE visitor_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /**************************
   * CREATE NEW VISITOR MODEL
   **************************/
  static create_visitor_model(data, callback) {
    const sql = "INSERT INTO visitor SET?";
    db.query(sql, data, callback);
  }
  /**************************
   * UPDATE VISITOR MODEL
   **************************/
  static update_visitor_model(data, id, callback) {
    const sql = "UPDATE visitor SET? WHERE visitor_id=?";
    db.query(sql, [data, id], callback);
  }
  /**************************
   * DELETE VISITOR MODEL
   **************************/
  static delete_visitor_model(id, callback) {
    const sql = "DELETE FROM visitor WHERE visitor_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = VisitorModel;
