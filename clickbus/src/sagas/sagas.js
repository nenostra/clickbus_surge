import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

const endpoint = 'https://api.clickbus.com.mx/api/v1/';
const engine = '17870591345453853149f381.1034539';

export function* dataFetch(action) {
  let from = action.values.origin.value;
  let to = action.values.destination.value;
  let date = action.values.date;
  let url = `${endpoint}search?departure=${date}&engine=${engine}&from=${from}&to=${to}`;
  const response = yield axios.get(url);
  yield put({type: 'FETCH_SUCCESS', response: response.data});
}

export function* watchFetch() {
  yield takeEvery('RESULTS', dataFetch);
}

export default function* rootSaga() {
  yield all([
    watchFetch(),
  ])
}
