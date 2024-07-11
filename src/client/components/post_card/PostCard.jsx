import React from "react";
import "./post_card.css";
import { CalendarMonth, Comment, Person } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
const PostCard = (props) => {
  const navigate = useNavigate();
  /*********************
   * GENERATE SLUGS
   *********************/
  const slug_generate = (text) => {
    const t = text.replaceAll(" ", "-");
    return t;
  };
  return (
    <div className="post_card">
      <div className="post_thumbnail">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="post_category">
        <p>{props.category}</p>
      </div>
      <div className="post_title">
        <h4
          onClick={() => {
            navigate(`/${slug_generate(props.title)}`, {
              state: { post_id: props.post_id },
            });
          }}
        >
          {" "}
          {props.title && props.title.slice(0, 100) + "..."}
        </h4>
      </div>
      <div className="post_info">
        <span>
          <Person htmlColor="#444" fontSize="small" />
          <small>{props.author_name}</small>
        </span>
        <span>
          <CalendarMonth htmlColor="#444" fontSize="small" />
          <small>{props.published}</small>
        </span>
        <span>
          <Comment htmlColor="#444" fontSize="small" />
          <small>{props.comment}</small>
        </span>
      </div>
      <div className="post_description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
