const userState = {
    state: {
        name: '',
        email: '',
        id: null,
        accessToken: '',
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken
        }
    }
}


export default userState