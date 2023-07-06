import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar,
} from './actions';
import axiosInstance from '@/configs/axiosIntance';

function* handleGetCars({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/car/all', payload));
    yield put(getCars.success(response.data));
  } catch (error) {
    yield put(getCars.failure(error.message));
  }
}

function* handleGetCar(action) {
  try {
    // const car = yield call(api.getCar, action.payload);
    // yield put(getCar.success(car));
  } catch (error) {
    // yield put(getCar.failure(error.message));
  }
}

function* handleAddCar(action) {
  try {
    const newCar = yield call(() => axiosInstance.post('/car/store', action.payload));
    yield put(addCar.success(newCar));
  } catch (error) {
    // yield put(addCar.failure(error.message));
  }
}

function* handleDeleteCar(action) {
  try {
    const { payload: carId } = action; // Extract the carId from the payload
    yield call(() => axiosInstance.delete(`/car/delete/${carId}`));
    yield put(deleteCar.success(carId));
  } catch (error) {
    yield put(deleteCar.failure(error.message));
  }
}

export default function* carSaga() {
  yield takeLatest(getCars.request, handleGetCars);
  yield takeLatest(getCar.request, handleGetCar);
  yield takeLatest(addCar.request, handleAddCar);
  // yield takeLatest(updateCar.request, handleUpdateCar);
  yield takeLatest(deleteCar.request, handleDeleteCar);
}