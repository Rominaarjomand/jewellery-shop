import { combineReducers } from "redux";
import MenuReducer from "./Menu/MenuReducer";
import AllproductsReducer from "./Allproducts/AllproductsReducer"
import FooterReducer from "./Footer/FooterReducer"
import CounterReducer from "./Counter/CounterReducer";
import ProductsReducer from "./Products/ProductsReducer";

const rootreducer = combineReducers({
    menu: MenuReducer,
    allproducts: AllproductsReducer,
    footer: FooterReducer,
    counter: CounterReducer,
    products:ProductsReducer

})
export default rootreducer