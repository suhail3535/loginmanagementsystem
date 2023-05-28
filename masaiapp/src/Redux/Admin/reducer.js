import { GET_FAILURE, GET_REQUEST, GET_REQUEST_SUCCESS, GET_SUCCESS } from "./actiontypes";

const initialState = {
    isLoading: false,
    isError: false,
    lecture: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REQUEST:
            return { ...state, isLoading: true, isError: false };

        case GET_FAILURE:
            return { ...state, isLoading: false, isError: true };

        case GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                lecture: [payload, ...state.lecture],
            };

        case GET_REQUEST_SUCCESS:
            return { ...state, isLoading: false, lecture: payload };

        default:
            return state;
    }
};
