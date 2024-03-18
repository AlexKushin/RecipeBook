import { NgModule } from "@angular/core";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";



@NgModule({
    declarations:
        [
            ShoppingListComponent,
            ShoppingListEditComponent,
        ],
    imports:
        [
            FormsModule,
            ShoppingListRoutingModule,
            SharedModule
        ]
})
export class ShoppingListModule { }