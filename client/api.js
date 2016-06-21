import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/'; 

const api = {
  getIngredients(event, ingredients) {
    if (event === null) {
      // event === null means no changed to user data input,
      // only that the ingredient page is re-rendering
      return axios.get('ingredients')
    } else {
      return axios.post('ingredients', {
          ingredients: ingredients,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};

export default api;
