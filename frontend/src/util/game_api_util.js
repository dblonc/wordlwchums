import axios from 'axios';

export const createGuess = guess =>{
   return axios.post("/api/daily", { guess })
}
