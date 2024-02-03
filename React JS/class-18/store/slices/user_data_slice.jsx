import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  //   user_name: "Adnan",
  //   city: "Karachi",
  //   country: "Pakistan",
  isLoggedIn: false,
  value: 0,
};

const user_data_slice = createSlice({
  initialState: initialstate,
  name: "user-data",

  //   reducers:{
  //     increment: (state)=>{
  //         state.value +=1

  //     }

  //   }

  reducers: {
    setUserAuth: (state) => {
      // ...
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default user_data_slice.reducer;

export const { setUserAuth, setLogout } = user_data_slice.actions;
