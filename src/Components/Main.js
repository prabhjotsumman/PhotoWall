import React, { Component } from "react";
import { Route } from "react-router-dom";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "2",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
        },
        {
          id: "1",
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        },
        {
          id: "0",
          description: "Aliens???",
          imageLink:
            "https://www.marshallsindia.com/images/bs-collection/volume2/abstract/abstract-slider-1.jpg"
        }
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  removePhoto(postRemoved) {
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  addPhoto(postSubmitted) {
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }));
  }
  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall
                onRemovePhoto={this.removePhoto}
                posts={this.state.posts}
              />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={AddedPost => {
                console.log(AddedPost);

                this.addPhoto(AddedPost);
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
