import * as api from "../../api";
import { AUTH } from "../contants";

export const signup = (formData, history) => async (dispatch) => {
  try {
    //after signup, we push to the homepage
    history.push("/");
  } catch (error) {}
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    //after login, we push to the homepage
    history.push("/");
  } catch (error) {}
};
