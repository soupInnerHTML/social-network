const SET_USER_DATA = 'setUderData'

export const setUserData = (login, email, id, avatar, isAuth) => ({
    type: SET_USER_DATA,
    userData: {
        login,
        email,
        id,
        avatar,
        isAuth
    }
})

let initialState = {
    login: '',
    email: '',
    id: '',
    avatar: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userData }
        default:
            return state
    }
}

export default authReducer