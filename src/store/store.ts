import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../store/reducers/authReducer';
import {productsReducer} from '../store/reducers/productsReducer'

const reducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
