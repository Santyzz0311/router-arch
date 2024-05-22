import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../types";
import { clearItemInLocalStorage, setItemInLocalStorage } from "../../utils/storage";
import { userKey } from "../../utils/constants";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem(userKey) ? JSON.parse(localStorage.getItem(userKey) as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) =>  {
      setItemInLocalStorage<UserInfo>(userKey, action.payload)
      return action.payload
    },
    updateUser: (state, action) =>  {
      const result  = { ...state, ...action.payload }
      setItemInLocalStorage<UserInfo>(userKey, result)
      return result
    },
    resetUser: () => {
      clearItemInLocalStorage(userKey)
      return EmptyUserState
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer