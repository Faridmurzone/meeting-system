import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {browserHistory} from 'react-router-dom';
import { rootSaga } from './sagas/helloSaga'
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// export default function configureStore(initialState, browserHistory) {
//     const sagaMiddleware = createSagaMiddleware()

//     const store = createStore(
//         rootReducer,
//         initialState,
//         composeWithDevTools (
//             applyMiddleware(sagaMiddleware)
//             ) 
//     )
//     sagaMiddleware.run(rootSaga)
//     const action = type => store.dispatch({type})
    
//     return action;
// }

export default function configureStore(initialState, browserHistory) {
    const sagaMiddleware = createSagaMiddleware()

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools (
            applyMiddleware(sagaMiddleware)
            ) 
    )
    sagaMiddleware.run(rootSaga)

}
