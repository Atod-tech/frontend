export class AppConstants {
  static isDevelopmentMode = process.env.NODE_ENV !== "production";
  static BASE_URL = this.isDevelopmentMode
    ? process.env.NEXT_PUBLIC_DEV_BASE_API_URL
    : process.env.NEXT_PUBLIC_PROD_BASE_API_URL;
  static TOKEN = "cz?re";
  static USER = "ueto3xg";
}

export const UnprotectedRoutes = [];

export class RouteConstants {
  /***********************************/
  // USERS
  /***********************************/
  // UNPROTECTED ROUTES
  static HOME: string = "/";
  static LOGIN: string = "/login";
  static REGISTER: string = "/register";
  static FORGOT_PASSWORD: string = "/login/forgot-pwd";
  static RESET_PASSWORD: string = "/login/reset-pwd";
  static VERIFY_ACCOUNT: string = "/register/verify";

  // PROTECTED ROUTES
  static DASHBOARD: string = "/dashboard";

  /***********************************/
  // ADMIN
  /***********************************/
  // UNPROTECTED ROUTES
  static ADMIN_LOGIN: string = "/admin/login";

  // PROTECTED ROUTES
  static ADMIN_DASHBOARD: string = "/admin/dashboard";

  static UNPROTECTED_ROUTES: string[] = [
    // USERS
    this.HOME,
    this.LOGIN,
    this.REGISTER,
    this.FORGOT_PASSWORD,
    this.RESET_PASSWORD,
    this.VERIFY_ACCOUNT,

    // ADMIN
    this.ADMIN_LOGIN
  ];
}

export class QueryKeys {
  static QUERY_KEY = "VALUE";
}
