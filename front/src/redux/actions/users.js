import axios from "axios"

export const setUsuario = (user) => ({
    type: "CREATE_USER",
    user
});

export const logUser = (user) => ({
    type: "LOGGUE_USER",
    user
});

export const crearUsuario = (user) => dispatch =>
    axios.post('/user/register', user)
        .then(user => dispatch(logUser(user.data)))