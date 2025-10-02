// Reducer de actividades

import type { Activity } from "../types"

export type ActivityActions = {
    type :    'save-activity',
    payload : { newActivity : Activity }
}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
    state  : ActivityState   = initialState,
    action : ActivityActions
) => {
    switch(action.type) {
        case 'save-activity':
            return {
                ...state, // no perder la información que ya estaba en el state
                activities: [...state.activities, action.payload.newActivity] // ...state.activities = no perder actividades previas
            }
        default:
    }

    return state
}