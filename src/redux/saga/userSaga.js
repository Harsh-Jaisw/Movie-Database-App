import { put, takeEvery } from "redux-saga/effects";
function* getApi() {
  let result = yield fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=2c53407d22569255ee3eb922b4fbe214&language=en-us&page`
  );
  result = yield result.json();
  yield put({ type: "GET_USERS_SUCCESS", users: result });
}

function* getSearchApi(data) {
  let result = yield fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=2c53407d22569255ee3eb922b4fbe214&language=en-US&query=${data.payload}&page=1&include_adult=false`
  );
  result = yield result.json();
  yield put({ type: "GET_USERS_SUCCESS", users: result });
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", getSearchApi);
  yield takeEvery("GET_USERS_REQUESTED", getApi);
}
export default userSaga;
