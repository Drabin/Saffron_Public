// import { Ingredient } from '../models/ingredient';
// import { Ingredients } from '../collections/ingredients';
const Ingredient = require('../models/ingredient.js');
const Ingredients = require('../collections/ingredients.js');

// Note to team: try to do these relationally. If not,
// make use of the req object to obtain userID

module.exports = {
  addIngredient: function (req, res) {
    const ingredient = req.body.ingredient;
    // Ingredients.forge({email: user}).
  },


  getIngredients: function (req, res) {

  },

  favedSets: function (req, res) {

  }
};
