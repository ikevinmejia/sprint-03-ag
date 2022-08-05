import { userTypes } from "../Types/userTypes";


const loginSync = (user) => ({
    type: userTypes.login,
    payload: user
})