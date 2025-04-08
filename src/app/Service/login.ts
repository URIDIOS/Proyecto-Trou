export interface LoginRequest {
    email: string;
    contraseña: string;
  }
  
  export interface LoginResponse {
    isSuccess: boolean;
    token?: string;
    message?: string;
  }
  