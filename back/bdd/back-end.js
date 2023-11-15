import axios from 'axios'

export async function postRequest(ressource, params = {}){
return await axios.post(`${ressource}`,
    {params},
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}

export async function getRequest(ressource, params = {}){
    return await axios.get(`${ressource}`,
    {params},
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}

export async function putRequest(ressource, params = {}){
    return await axios.put(`${ressource}`,
    {params},
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}

export async function deleteRequest(ressource, params = {}){
    return await axios.delete(`${ressource}`,
    {params},
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}