var urlBase = "";

import axios from 'axios'

function getData(urlget) {
    var url = urlBase + urlget;
    return axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: url,
        validateStatus: (status) => {
            return true;
        }
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log("reponse");
        } else if (error.request) {
            console.log('request', error.request);
            console.log("request");
        } else {
            console.log('Error', error.message);
            console.log("error");
        }
        return error;
    }).then((response) => {
        return response.data;
    });
}

function postData(params, urlPost) {
    var url = urlBase + urlPost;
    return axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        url: url,
        validateStatus: (status) => {
            return true;
        },
    }).then((response) =>{
        return response.data;
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log("reponse");
        } else if (error.request) {
            console.log('request', error.request);
            console.log("request");
        } else {
            console.log('Error', error.message);
            console.log("error");
        }
        return error;
    })
}

function putData(params, urlPut) {
    var url = urlBase + urlPut;
    return axios({
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        url: url,
        validateStatus: (status) => {
            return true;
        },
    }).then((response) =>{
        return response.data;
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log("reponse");
        } else if (error.request) {
            console.log('request', error.request);
            console.log("request");
        } else {
            console.log('Error', error.message);
            console.log("error");
        }
        return error;
    })
}

function deleteData(params, urlDelete) {
    var url = urlBase + urlDelete;
    return axios({
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        url: url,
        validateStatus: (status) => {
            return true;
        },
    }).then((response) =>{
        return response.data;
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log("reponse");
        } else if (error.request) {
            console.log('request', error.request);
            console.log("request");
        } else {
            console.log('Error', error.message);
            console.log("error");
        }
        return error;
    })
}

export{getData, postData, putData, deleteData}