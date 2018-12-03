import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListModule { }
