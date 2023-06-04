import axios from "axios";
import { createContext } from "react";

const ENDPOINTS = {
    register: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    login: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    todayHabits: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    createHabit: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
}

const UserContext = createContext([{}, () => {}])
const HabitsContext = createContext([ [], () => {}])

// Pegar dados e colocar direto no context!
function registerNewUser(data) {
   /*  {
        email: "...",
        name: "...",
        image: "...",
        password: "..."
    }  */
    const promisse = axios.post(ENDPOINTS.register, data)

    return promisse;
}

function loginUser(data) {
    /*{
        email: "...",
        password: "..."
    } */

    const promisse = axios.post(ENDPOINTS.login, data)
    return promisse;
}


function getTodayHabits(token) {
    
    const config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    const promise = axios.get(ENDPOINTS.todayHabits, config);
    return promise;
}


function postCreateHabit(token, data) {

    const config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    const promise = axios.post(ENDPOINTS.createHabit, data, config);
    return promise;
}

export {registerNewUser, loginUser, getTodayHabits, postCreateHabit, UserContext, HabitsContext}