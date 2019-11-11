import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removePost, addPost } from "../redux/actions";

function mapStateToProps(state) {
  return {
    posts: state
  };
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({ removePost, addPost }, dispatch);
}

const App = connect(
  mapStateToProps,
  MapDispatchToProps
)(Main);

export default App;
