import axios from "../custom-axios/axios";
import instance from "../custom-axios/axios";

export const fitZoneApi = {
    authenticate,
    register,
    getworkoutA,
    getworkoutB,
    getworkoutYoga,
    getAllworkoutA,
    getAllworkoutB,
    getAllworkoutYoga,
    addworkoutA,
    addworkoutB,
    addworkoutYoga
}

function authenticate(username, password) {
    return instance.post('/login', {username, password})
}

function register(user) {
    return instance.post('/register', user)
}

function getworkoutA(name) {
    return instance.post('/workouta', name, {
        headers: {'Content-type': 'application/json'}
    })
}

function getAllworkoutA(name) {
    return instance.post('/workouta/all', name, {
        headers: {'Content-type': 'application/json'}
    })
}

function addworkoutA(dto) {
    return instance.post('/workouta/add', dto)
}

function getworkoutB(name) {
    return instance.post('/workoutb', name, {
        headers: {'Content-type': 'application/json'}
    })
}

function getAllworkoutB(name) {
    return instance.post('/workoutb/all', name, {
        headers: {'Content-type': 'application/json'}
    })
}

function addworkoutB(dto) {
    return instance.post('/workoutb/add', dto)
}

function getworkoutYoga(name) {
    return instance.post('/workoutyoga', name, {
        headers: {'Content-type': 'application/json'}
    })
}

function getAllworkoutYoga(name) {
    return instance.post('/workoutyoga/all', name, {
        headers: {'Content-type': 'application/json'}
    })
}

function addworkoutYoga(dto) {
    return instance.post('/workoutyoga/add', dto)
}

