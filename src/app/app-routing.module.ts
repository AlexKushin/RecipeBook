import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./components/recipes/recipe-details/recipe-details.component";
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./components/recipes/recipes-edit/recipes-edit.component";
import { RecipesResolverService } from "./components/recipes/recipes-resolve.service";


const appRoutes: Routes = [

    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipesEditComponent},
        { path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService]},
        { path: ':id/edit', component: RecipesEditComponent, resolve: [RecipesResolverService]}
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },


]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}