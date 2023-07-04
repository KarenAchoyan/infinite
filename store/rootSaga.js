import {all} from "redux-saga/effects";
import authSaga from "./auth/saga";
import {categorySaga} from "@/store/category/saga";
import blogSaga from "@/store/blog/saga";
import {contactSaga} from "@/store/about/saga";
import {staffSaga} from "@/store/staff/saga";

function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    blogSaga(),
    contactSaga(),
    staffSaga()
  ]);
}

export default rootSaga;
