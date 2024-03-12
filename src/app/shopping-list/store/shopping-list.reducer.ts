import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
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
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                ingredients: updatedIngredients,
                //we use ... operator to spread elements of payload instead of add array from payload as new element of existing array
                editedIngredientIndex: -1,
                editedIngredient: null
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state, // <- spread operator, to copy all the data from initial array 
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex != state.editedIngredientIndex;
                }), 
                editedIngredientIndex: -1,
                editedIngredient: null
                //we use ... operator to spread elements of payload instead of add array from payload as new element of existing array
            };
        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: {...state.ingredients[action.payload]} //in this case ... operaror makes the copy of ingredient at action.payload index instead of chaning ingredient in array of Store
            }
        case ShoppingListActions.STOP_EDIT:
            return{...state,
                editedIngredient: null,
                editedIngredientIndex: -1}
        default:
            return state;
    }
}