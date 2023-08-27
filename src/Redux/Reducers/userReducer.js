import { createSlice } from "@reduxjs/toolkit";;

const userSlice = createSlice({
    name: "userInfo",
    initialState: {
        user_data : {
                    email: "",  
                    role: "",
                    pic_URL : "",
                    pic_URL_ID : "",
                    phone: "",
                    username : ""
                    }
    },
    reducers : {
        loginUser : (state, action) => {
            state.user_data = action.payload
        },
        logoutUser : (state, action) => {
            state.user_data = {email: "", username: "", phone : "",
                                 role : "", pic_URL : "", pic_URL_ID : "",}
        },
        changeUserPic: (state, action) => {
            state.user_data  = ({...state.user_data, pic_URL : action.payload.url,
                pic_URL_ID : action.payload.public_id })
        },
        changeUserPhone: (state, action) => {
            state.user_data  = ({...state.user_data, phone : action.payload.phone })
        }
    }
})
// export actions
export const {loginUser, logoutUser, changeUserPic, changeUserPhone} = userSlice.actions;
// export the userslice reducer
export default userSlice.reducer