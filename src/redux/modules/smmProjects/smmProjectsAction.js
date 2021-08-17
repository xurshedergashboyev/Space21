import axios from "axios"
import actionTypes from "../../../contants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getSmmProjects = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_SMM_PROJECTS,
        payload: axios.get(`${link}/portfolio/smm`)
    })
}