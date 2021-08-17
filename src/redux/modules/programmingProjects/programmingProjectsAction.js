import axios from 'axios';
import {link} from '../../../backendConfig/link/link';
import actionTypes from "../../../contants/actionTypes";

export const getProgrammingProjects = () => (dispatch) => {
    dispatch({
        type:actionTypes.GET_PROGRAMMING_PROJECTS,
        payload: axios.get(`${link}/portfolio/programming`)
    })
}