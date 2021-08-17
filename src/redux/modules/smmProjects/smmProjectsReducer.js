import actionTypes from "../../../contants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    courses:[]
}

const map = {
    [`${actionTypes.GET_SMM_PROJECTS}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_SMM_PROJECTS}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        courses:payload.data
    }),
    [`${actionTypes.GET_SMM_PROJECTS}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function smmProjectsReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}