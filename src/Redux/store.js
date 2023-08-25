import { configureStore } from "@reduxjs/toolkit"; 
import userSlice from './Reducers/userReducer'
import productsSlice from './Reducers/productsReducer'
import cartSlice from './Reducers/cartReducer'
import orderSlice from './Reducers/orderReducer'
export default configureStore({
    reducer: {
        userInfo : userSlice,
        products : productsSlice,
        cart : cartSlice, 
        order : orderSlice
    },
})