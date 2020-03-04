import axios from "axios"
import { CREATE_USER, LOGGUE_USER } from "../store/constants"

export const setUsuario = (user) => ({
    type: CREATE_USER,
    user
});

export const logUser = (user) => ({
    type: LOGGUE_USER,
    user
});

export const crearUsuario = (user) => dispatch =>
    axios.post('/user/register', user)
        .then(user => dispatch(logUser(user.data)))

export const loguearUsuario = (user) => dispatch =>(
console.log(user),
    axios.post('/user/login', {email: user.email, password: user.password}))
        .then(res => res.data)
        .then(user => dispatch(logUser(user)))
        .catch(err => {throw new Error(err)})