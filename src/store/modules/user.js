const userState = {
    state: {
        user: {
            name: '',
            id: null,
            email: ''
        },
        isLoggedIn: false
    },
    mutations: {
        setLoggedIn(state, logged) {
            state.isLoggedIn = logged
        },
        setUser(state, userData) {
            state.user = userData
        }
    }
}


export default userState