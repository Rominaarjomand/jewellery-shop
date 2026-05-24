import { createStore } from "redux";
import rootreducer from "./rootreducer";

const Store = createStore(rootreducer)
export default Store