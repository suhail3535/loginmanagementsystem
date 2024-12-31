import axios from "axios";
import {
    // GET_CATEGORIES_REQUEST,
    // GET_CATEGORIES_SUCCESS,
    GET_FAILURE,
    GET_REQUEST,
    GET_REQUEST_SUCCESS,
} from "./actiontypes";

export const get_Request = () => {
    return { type: GET_REQUEST };
};
export const get_failure = () => {
    return { type: GET_FAILURE };
};
export const get_success = (payload) => {
    return { type: GET_REQUEST, payload };
};
export const getdataSuccess = (payload) => {
    return { type: GET_REQUEST_SUCCESS, payload };
};


export const postData = (payload) => (dispatch) => {
    dispatch(get_Request());
    axios
        .post("https://json-server-vercel-rosy-eight.vercel.app/schedule", payload)
        .then((res) => {
            console.log(res.data);
            dispatch(get_success(res.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(get_failure());
        });
};

export const getRequest = () => (dispatch) => {
    dispatch(get_Request());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/schedule")
        .then((res) => {
            console.log(res.data, "getRequestaction");
            dispatch(getdataSuccess(res.data));
        })
        .then((error) => {
            dispatch(get_failure());
        });
};

// <------------for tickts page----------->
export const getRequestTickets = () => (dispatch) => {
    dispatch(get_Request());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/tickets")
        .then((res) => {
            console.log(res.data, "getRequestaction");
            dispatch(getdataSuccess(res.data));
        })
        .then((error) => {
            dispatch(get_failure());
        });
};

// <------------for Lecture page----------->
export const getRequestLecture = () => (dispatch) => {
    dispatch(get_Request());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/lecture")
        .then((res) => {
            console.log(res.data, "getRequetlecture");
            dispatch(getdataSuccess(res.data));
        })
        .then((error) => {
            dispatch(get_failure());
        });
};

// <------------for Assignment page----------->
export const getRequestAssisgnment = () => (dispatch) => {
    dispatch(get_Request());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/assignment")
        .then((res) => {
            console.log(res.data, "assignment");
            dispatch(getdataSuccess(res.data));
        })
        .then((error) => {
            dispatch(get_failure());
        });
};
// <------------for Quiz page----------->
export const getRequestQuiz = () => (dispatch) => {
    dispatch(get_Request());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/quiz")
        .then((res) => {
            console.log(res.data, "quiz");
            dispatch(getdataSuccess(res.data));
        })
        .then((error) => {
            dispatch(get_failure());
        });
};

// < -----------for Scheduledelete---------->
 export const deletedata = (id) => (dispatch) => {
    dispatch(get_Request());
    return axios
        .delete(`https://json-server-vercel-rosy-eight.vercel.app/schedule/${id}`)
        .then((res) => {
            console.log(res.data);
            dispatch(get_success());
        })
        .catch((err) => {
            dispatch(get_failure());
        });
};

// < -----------for lecturedelete---------->
 export const deletelecturedata = (id) => (dispatch) => {
     dispatch(get_Request());
     return axios
         .delete(`https://json-server-vercel-rosy-eight.vercel.app/lecture/${id}`)
         .then((res) => {
             console.log(res.data);
             dispatch(get_success());
         })
         .catch((err) => {
             dispatch(get_failure());
         });
 };

export const editProduct = (id, newData) => (dispatch) => {
    dispatch(get_Request());
    axios
        .patch(
            `https://json-server-vercel-rosy-eight.vercel.app/schedule/${id}`,
            newData
        )
        .then((res) => {
            dispatch({ type: get_success });
        })
        .catch((err) => {
            dispatch(get_failure());
        });
};



export const lecturesData = (payload) => (dispatch) => {
    dispatch(get_Request());
    axios
        .post("https://json-server-vercel-rosy-eight.vercel.app/lecture", payload)
        .then((res) => {
            console.log(res.data);
            dispatch(get_success(res.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(get_failure());
        });
};


