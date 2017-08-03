import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

const endpoint = 'https://api.clickbus.com.mx/api/v1/';
const engine = '17870591345453853149f381.1034539';

export function* dataFetch(action) {
  const { payload } = action;
  let from = payload.origin.value;
  let to = payload.destination.value;
  let date = payload.date;
  let url = `${endpoint}search?departure=${date}&engine=${engine}&from=${from}&to=${to}`;
  const response = yield axios.get(url);
  yield put({type: 'FETCH_SUCCESS', payload: response.data}); //CAMBIAR A RESULTS
}

export function* watchFetch() {
  yield takeEvery('RESULTS', dataFetch); //CAMBIAR A FETCH_RESULT
}

export default function* rootSaga() {
  yield all([
    watchFetch(),
  ])
}
