import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import validation from "./middleware/validation";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(validation)));
// const store = createStore(rootReducer, composeWithDevTools());
export default store;