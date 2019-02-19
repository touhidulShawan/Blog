import jasonPlaceHolder from "../api/jasonPlaceHolder";
export const fetchPost = () => dispatch =>
  jasonPlaceHolder.get("/posts").then(response => {
    dispatch({
      type: "FETCH_POST",
      payload: response.data
    });
  });

export const fetchUser = id => dispatch =>
  jasonPlaceHolder.get(`/users/${id}`).then(response => {
    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  });
