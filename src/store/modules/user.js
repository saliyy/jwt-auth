const userState = {
    state: {
        name: '123',
        email: '',
        id: null,
        accessToken: '',
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken
        }
    },
    actions: {
        dump(state) {
            console.dir(state)
        }
    }
}


export default userState