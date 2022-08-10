import {
    newWorkoutType
} from "../Types/newWorkoutType";

export const actionNewWorkout = (payload) => {
    return {
        type: newWorkoutType.addEorkout,
        payload
    }
}