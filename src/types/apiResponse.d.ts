// AUTH

interface GenericResponse {
  message: string;
}

interface RegisterResponse extends GenericResponse {
  user: {
    phoneNumber: string;
  };
}

interface UserLoginResponse {
  token: string;
  phoneVerified: boolean;
  id: string;
}

interface VerifyOtpResponse extends GenericResponse {
  user: User;
}

interface RequestOtpResponse {
  message: string;
}

interface CompleteRegistrationResponse extends GenericResponse {
  user: User;
}

interface RequestPasswordResetOtpResponse {
  message: string;
}

interface ResetPasswordResponse {
  message: string;
}

interface VerifyEmailOtpResponse extends GenericResponse {
  user: User;
}
