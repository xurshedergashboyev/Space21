import actionTypes from "../../../contants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    courses:[]
}

const map = {
    [`${actionTypes.GET_DESIGN_PROJECTS}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_DESIGN_PROJECTS}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        courses:payload.data
    }),
    [`${actionTypes.GET_DESIGN_PROJECTS}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function designProjectsReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}