import {
    newWorkoutType
} from "../Types/newWorkoutType";

const initialState = {
    dataForm: []
}

export const reducerNewWorkout = (state = initialState, action) => {
    switch (action.type) {
        case newWorkoutType.addEorkout:

            return {
                ...state,
                dataForm: [...state.dataForm, action.payload]

            }

            default:
                return state;
    }
}