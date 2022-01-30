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
        setUser(state, userData) {
            state.user = userData
            state.isLoggedIn = true
        }
    }
}


export default userState