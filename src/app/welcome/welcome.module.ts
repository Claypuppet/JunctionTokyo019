import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';

import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";


const routes: Routes = [
  {
    path: "",
    redirectTo: "what",
    pathMatch: "full"
  },
  {
    path: "what",
    loadChildren: "./welcome-what/welcome-what.module#WelcomeWhatModule"
  },
  {
    path: "how",
    loadChildren: "./welcome-how/welcome-how.module#WelcomeHowModule"
  },
  {
    path: "setup",
    loadChildren: "./welcome-setup-profile/welcome-setup-profile.module#WelcomeSetupProfileModule"
  },
];

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WelcomeModule {
}
