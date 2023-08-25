import { createSlice } from "@reduxjs/toolkit";;

const orderSlice = createSlice({
    name: "orderInfo",
    initialState: {  
       order_request : {
        order_data : {orderID: "" },
        request_type : ""
       }
    },
    reducers : {
        setRequest : (state, action) => {
            state.order_request = action.payload
        },
        clearRequest : (state, action) => {
            state.order_request =   {
                order_data : {orderID: "" },
                request_type : ""
               }
        }
    }
})
// export actions
export const {setRequest} = orderSlice.actions;
// export the orderSlice reducer
export default orderSlice.reducer