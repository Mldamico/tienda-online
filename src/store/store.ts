import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../store/reducers/authReducer';
import { productsReducer } from '../store/reducers/productsReducer';
import { cartReducer } from '../store/reducers/cartReducer';

const reducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
