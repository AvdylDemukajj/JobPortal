import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_RESET,
    DELETE_JOB_SUCCESS,
    EDIT_JOB_FAIL,
    EDIT_JOB_REQUEST,
    EDIT_JOB_RESET,
    EDIT_JOB_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_RESET,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_RESET,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_RESET,
    REGISTER_JOB_SUCCESS
} from "../constants/jobconstant"

export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true }
        case JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}