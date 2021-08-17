import axios from "axios"
import actionTypes from "../../../contants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getDesignCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_DESIGN_PROJECTS,
        payload:axios.get(`${link}/portfolio/design`)
    })
}