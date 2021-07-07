export interface signupRequest {
  email: string;
  password: string;
  name: string;
}

export interface checkVertifyRequest {
  email: string;
  code: string;
}

export interface signupVertifyCodeRequest {
  email: string;
}

export interface resetPasswordVertifyCodeRequest {
  email: string;
}

export interface resetPasswordRequest {
  email: string;
  password: string;
}

export interface checkVertifyCodeRequest {
  email: string;
  code: string;
}
