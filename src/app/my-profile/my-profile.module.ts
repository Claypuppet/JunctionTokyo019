import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {MyProfileComponent} from "~/app/my-profile/my-profile.component";

import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MyProfileComponent
  },
  {
    path: "edit",
    loadChildren: "./edit-profile/edit-profile.module#EditProfileModule"},
];

@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MyProfileModule {
}
