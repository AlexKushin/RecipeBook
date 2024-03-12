import { Action } from "@ngrx/store";
import { Ingredient } from "../../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

export interface AppState{
    shoppingList: State
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tommatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(
    state: State = initialState,
    action: ShoppingListActions.ShoppingListActions
) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                ingredients: [...state.ingredients, ...action.payload]
                //we use ... operator to spread elements of payload instead of add array from payload as new element of existing array
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                ingredients: updatedIngredients
                //we use ... operator to spread elements of payload instead of add array from payload as new element of existing array
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex != action.payload;
                })
                //we use ... operator to spread elements of payload instead of add array from payload as new element of existing array
            };
        default:
            return state;
    }
}