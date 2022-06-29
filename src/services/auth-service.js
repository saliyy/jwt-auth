import axiosInstance from '../api';

class AuthService {
  static async registration(email, password, name) {
    return axiosInstance.post('auth/registration', {
      email,
      password,
      name,
    });
  }

  static async login(email, password) {
    return axiosInstance.post('auth/login', { email, password });
  }

  static async refresh() {
    return axiosInstance.get('auth/refresh');
  }
}

export default AuthService;
