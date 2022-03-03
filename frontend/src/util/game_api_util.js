import axios from 'axios';

export const createGuess = guess =>{
   return axios.post("http://localhost3000/daily", { user: "", text: "" })
}
