import React, { Component } from "react";
import { Route } from "react-router-dom";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={AddedPost => {
                this.props.addPost(AddedPost);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;
