//스토에는 리듀스가 필요하고 리듀스는 펑션타입의 초기값이 필요하다
import {createStore} from "redux";
//해당화일을 찾는다. 없으면 해당 폴더의 index.js를 찾는다
import {allReducer} from "./reducers";

export const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());