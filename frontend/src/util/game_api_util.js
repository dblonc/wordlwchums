import axios from 'axios';

export const createGuess = guess =>{
   return axios.post("localhost:5000/api/daily", { guess })
}
