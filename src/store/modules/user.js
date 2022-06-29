import AuthService from '../../services/auth-service';

/* eslint-disable no-debugger */
const userState = {
  state: {
    user: {
      name: '',
      id: null,
      email: '',
    },
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
      state.isLoggedIn = true;
    },
  },
  getters: {
    getUserName(state) {
      return state.user.name;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      return AuthService.login(email, password)
        .then((res) => {
          commit('setUser', res.data.user);
          localStorage.setItem(
            'x-access-token',
            res.data.accessToken
          );
          return Promise.resolve(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    registration({ commit }, { email, password, name }) {
      return AuthService.registration(email, password, name)
        .then((res) => {
          commit('setUser', res.data.user);
          localStorage.setItem(
            'x-access-token',
            res.data.accessToken
          );
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
  },
};

export default userState;
