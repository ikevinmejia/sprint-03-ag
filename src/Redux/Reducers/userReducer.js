import {
  userTypes
} from "../Types/userTypes";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.login:
      return action.payload;

    case userTypes.register:
      return action.payload;

    case userTypes.addWhag:
      return {
        ...state,
        weight: action.payload.weight,
          height: action.payload.height,
          age: action.payload.age,
          gener: action.payload.gener,
      };

    default:
      return state;
  }
};