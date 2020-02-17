import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchUsers() {
  const json = yield fetch('https://api.org/v1/users')
        .then(response => response.json(), );    
          yield put({ type: "USERS_RECEIVED", json: json.users, })
        .catch(err => {
          console.log(err)
        })
}

function* actionWatcher() {
     yield takeLatest('GET_USERS', fetchUsers)
}

export function* rootSaga() {
   yield all([actionWatcher()])
}
