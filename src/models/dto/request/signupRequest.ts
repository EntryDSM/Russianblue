export interface signupRequest {
  phone_number: string;
  password: string;
  name: string;
}

export interface checkVertifyRequest {
  phone_number: string;
  code: string;
}

export interface signupVertifyCodeRequest {
  phone_number: string;
}

export interface resetPasswordVertifyCodeRequest {
  phone_number: string;
}

export interface resetPassword {
  phone_number: string;
  password: string;
}
