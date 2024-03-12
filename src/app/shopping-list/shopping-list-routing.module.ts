import { Route, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { NgModule } from "@angular/core";

const routes: Route[] =
    [
        { path: '', component: ShoppingListComponent }
    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
