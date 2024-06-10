// GLOBAL

// AUTH SERVICE
interface UserRegister {
  fullname: string;
  email: string;
  password: string;
}

interface UserLogin {
  email: string;
  password: string;
}

interface ForgotPassword {
  email: string;
}

interface ResetPassword {
  otp: string;
  password: string;
  confirmPassword: string;
}

//
