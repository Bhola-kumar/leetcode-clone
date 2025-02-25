import { createSlice} from "@reduxjs/toolkit";

interface AuthState {
  isOpen: boolean;
  type: "login" | "register" | "forgetPassword";
}

const initialState: AuthState = {
  isOpen: false,
  type: "login",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = "login";
    },
    switchAuthModal: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { openModal, closeModal, switchAuthModal } = authSlice.actions;
export default authSlice.reducer;
