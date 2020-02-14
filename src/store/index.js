import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools (
            applyMiddleware(sagaMiddleware)
            ) 
    )
    sagaMiddleware.run(helloSaga)
    const action = type => store.dispatch({type})
    
    return action;
}
