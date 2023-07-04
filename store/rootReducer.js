import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import categoryReducer from "@/store/category/reducer";
import blogReducer from "@/store/blog/reducer";
import contactReducer from "@/store/about/reducer";
import staffReducer from "@/store/staff/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    blog:blogReducer,
    contact:contactReducer,
    staff:staffReducer
});

export default rootReducer;
