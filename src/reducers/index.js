import { combineReducers } from 'redux';

import todos from './todoReducer';
import alerts from './alertReducer';

// reducer合成器, 用于分别处理不同的reducer,即为rootReducer,用default export的元素在import的时候取别的名字.
export default combineReducers({
  todos,
  alerts
});


