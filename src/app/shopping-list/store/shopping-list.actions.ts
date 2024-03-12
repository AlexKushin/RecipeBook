import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    //payload: Ingredient;   
    //peyload property automatically adds to class, when we assign it in the constructor
    constructor(public payload: Ingredient) { }

}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    //payload: Ingredient [];   
    //peyload property automatically adds to class, when we assign it in the constructor
    constructor(public payload: Ingredient[]) { }

}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;
    //payload: Ingredient;   
    //peyload property automatically adds to class, when we assign it in the constructor
    constructor(public payload: Ingredient ) { }

}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
}
export class StartEdit implements Action {
    readonly type = START_EDIT;
    constructor(public payload: number) { }

}
export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

export type ShoppingListActions =
    | AddIngredient
    | AddIngredients
    | UpdateIngredient
    | DeleteIngredient
    | StartEdit
    | StopEdit;
// here we create new typewhich based on 2 existing types
//it siply says that type ShoppingListActions is AddIngredient or AddIngredients