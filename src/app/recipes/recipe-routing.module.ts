import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesResolverService } from "./recipes-resolve.service";
import { RecipesComponent } from "./recipes.component";


const routes: Route[] = [
    {
        path: '', component: RecipesComponent, canActivate: [AuthGuard], children:
            [
                { path: '', component: RecipeStartComponent, resolve: [RecipesResolverService] },
                { path: 'new', component: RecipesEditComponent },
                { path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService] },
                { path: ':id/edit', component: RecipesEditComponent, resolve: [RecipesResolverService] }
            ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }