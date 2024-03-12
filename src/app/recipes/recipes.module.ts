import { NgModule } from "@angular/core";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./recipes.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipesRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:
        [
            RecipeDetailsComponent,
            RecipeItemComponent,
            RecipeListComponent,
            RecipesComponent,
            RecipeStartComponent,
            RecipesEditComponent,
        ],
    imports:
        [
            ReactiveFormsModule,
            RouterModule,
            RecipesRoutingModule,
            SharedModule
        ]

}
)
export class RecipesModule { }