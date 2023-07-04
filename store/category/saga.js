import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from './actions';
import axiosInstance from "@/configs/axiosIntance";


// Category Sagas
function* fetchCategoriesSaga({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/category/all', payload));
    const categories = response.data; // Assuming the categories data is in response.data
    yield put(getCategories.success(categories.categories));
  } catch (error) {
    yield put(getCategories.failure(error.message));
  }
}

function* fetchCategorySaga(action) {
  try {
    const {id} = action.payload;
    const category = yield call(() => axiosInstance.post(`/category/show/${id}`, action.payload));
    yield put(getCategory.success(category.category));
  } catch (error) {
    yield put(getCategory.failure(error.message));
  }
}

function* addCategorySaga(action) {
  try {
    const newCategory = yield call(() => axiosInstance.post(`/category/store`, action.payload));
    yield put(addCategory.success(newCategory));
  } catch (error) {
    yield put(addCategory.failure(error.message));
  }
}

function* updateCategorySaga(action) {
  try {
    const {id} = action.payload;

    const updatedCategory = yield call(() => axiosInstance.post(`/category/update/${id}`, action.payload));
    yield put(updateCategory.success(updatedCategory));
  } catch (error) {
    yield put(updateCategory.failure(error.message));
  }
}



function* deleteCategorySaga(action) {
  try {
    const { payload: categoryId } = action; // Extract the categoryId from the payload
    yield call(() => axiosInstance.get(`/category/delete/${categoryId}`));
    yield put(deleteCategory.success(categoryId));
  } catch (error) {
    yield put(deleteCategory.failure(error.message));
  }
}
// Category Watcher Saga
export function* categorySaga() {
  yield takeLatest(getCategories.request, fetchCategoriesSaga);
  yield takeLatest(getCategory.request, fetchCategorySaga);
  yield takeLatest(addCategory.request, addCategorySaga);
  yield takeLatest(updateCategory.request, updateCategorySaga);
  yield takeLatest(deleteCategory.request, deleteCategorySaga);
}
