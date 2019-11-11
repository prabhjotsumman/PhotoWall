import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link to="/AddPhoto" className="addIcon"></Link>
      <div className="photoGrid">
        {props.posts
          .sort((x, y) => y.id - x.id)
          .map((post, index) => (
            <Photo key={index} post={post} {...props} />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired
};

export default PhotoWall;
