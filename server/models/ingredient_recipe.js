const db = require('../db/schema.js');
// don't need to assign the following two requires to variables
const Recipe = require('./recipe');
const Ingredient = require('./ingredient');

const Ingredient_Recipe = db.Model.extend({
  tableName: 'ingredients_recipes',

  recipe: () => {
    this.belongsTo(Recipe);
  },

  ingredient: () => {
    this.belongsTo(Ingredient);
  },
});

module.exports = Ingredient_Recipe;
