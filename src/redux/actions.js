export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index
  };
}

export function addPost(postData){
    return {
        type: "ADD_POST",
        payload: postData
    }
}