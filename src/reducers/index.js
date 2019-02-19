import { combineReducers } from "redux";
import BlogPostReducer from "./BlogPostReducer";
import BlogUserReducer from "./BlogUserReducer";
export default combineReducers({
  posts: BlogPostReducer,
  users: BlogUserReducer
});
