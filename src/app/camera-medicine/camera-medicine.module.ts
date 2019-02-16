import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {CameraMedicineComponent} from "./camera-medicine.component";

import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: CameraMedicineComponent
  },
];

@NgModule({
  declarations: [
    CameraMedicineComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CameraMedicineModule {
}
