import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import AlbumReducer from "./AlbumReducer";
import CategorieReducer from "./CategorieReducer";
import TagReducer from "./TagReducer";
import ImageReducer from "./ImageReducer";
import VideoReducer from "./VideoReducer";

const AllReducers = combineReducers({
    AuthReducer,
    UserReducer,
    AlbumReducer,
    CategorieReducer,
    TagReducer,
    ImageReducer,
    VideoReducer,
});

export default AllReducers;
