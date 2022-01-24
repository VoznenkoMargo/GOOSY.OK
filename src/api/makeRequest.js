import axios from 'axios';

const instance = axios.create({ 
    baseURL: "http://35.180.205.240:5000/api/"
});

/**
 * 
 * @param {string} method - get, post, put, delete and other
 * @param {string} route - the rest of the way different from baseUrl
 * @param {{}} config - object use with manual from backend https://saribeg.github.io/DAN.IT-API-Documentation/#update-product
 * @returns 
 */

export function makeRequest(method, route, config={}) {
    return instance[method](`${route}`, config)    
}

