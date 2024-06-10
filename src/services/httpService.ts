import axios from "axios";
import { StoreService } from "./";
import { AppConstants, RouteConstants } from "@src/constants";
import { errorToast } from "@src/helpers";

const axiosClient = axios.create({
  baseURL: AppConstants.BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
    // return response.data;
  },

  function (error) {
    console.log(error);
    if (!error.response) {
      console.log("Error: ", error);
      return Promise.reject(error);
    } else {
      if (error.response?.status === 401) {
        // console.log("UNAUTHORIZED");

        StoreService.removeItem(AppConstants.TOKEN);
        errorToast("Session Expired! Log in again to continue");
        window.location.replace(RouteConstants.LOGIN);
      } else if (error.response?.status === 403) {
        // console.log("FORBIDDEN");
        errorToast("FORBIDDEN ROUTE!!!");
      }
      return Promise.reject(error?.response?.data);
    }
  }
);

axiosClient.interceptors.request.use(
  function (config: any) {
    const token = StoreService.getItem(AppConstants.TOKEN);

    if (token) config.headers["authorization"] = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
