import { Recipe } from "../recipe.model";
import * as RecipesActions from './recipe.actions'

export interface State {
    recipes: Recipe[],

}

const initialState: State = {
    recipes: [],

}

export function recipeReducer(state = initialState, action: RecipesActions.RecipesActions) {
    switch (action.type) {
        case RecipesActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }
        case RecipesActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case RecipesActions.UPDATE_RECIPE:
            const updatedRecipe = {
                ...state.recipes[action.payload.id],
                ...action.payload.recipe
            };

            const updatedRecipes = [...state.recipes];
            updatedRecipes[action.payload.id] = updatedRecipe;
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                recipes: updatedRecipes,
                //we use ... operator to spread elements of payload instead of add array from payload as new element of existing array

            };
        case RecipesActions.DELETE_RECIPE:
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                recipes: state.recipes.filter((recipe, recipeIndex) => {
                    return recipeIndex !== action.payload;
                })
            };
        default:
            return state
    }

    return state;
}