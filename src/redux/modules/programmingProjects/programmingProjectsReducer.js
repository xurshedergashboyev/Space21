import actionTypes from "../../../contants/actionTypes";

const defaultState = {
    loading: false,
    error: false,
    projects: []
}

const map = {
    [`${actionTypes.GET_PROGRAMMING_PROJECTS}${actionTypes.PENDING}`]:(state) => ({
        ...state,
        loading: true
    }),
    [`${actionTypes.GET_PROGRAMMING_PROJECTS}${actionTypes.FULFILLED}`]:(state, {payload}) => ({
        ...state,
        loading: false,
        error: false,
        projects: payload.data
    }),
    [`${actionTypes.GET_PROGRAMMING_PROJECTS}${actionTypes.REJECTED}`]: (state) => ({
        ...state,
        loading: false,
        error: true
    })
}

export default function programmingProjectsReducer(state=defaultState, action) {
    return (map[action.type] && map[action.type](state, action)) || state;
}