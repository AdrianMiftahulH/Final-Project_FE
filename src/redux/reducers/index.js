import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import SupplierReducer from "./SupplierReducer";
import ResellerReducer from "./ResellerReducer";
import ProductReducer from "./ProductReducer";
import TransactionReducer from "./TransactionReducer";


export default combineReducers({
    UserReducer,
    SupplierReducer,
    ResellerReducer,
    ProductReducer,
    TransactionReducer
})