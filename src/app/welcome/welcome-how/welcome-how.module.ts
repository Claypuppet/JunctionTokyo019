import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {WelcomeHowComponent} from "~/app/welcome/welcome-how/welcome-how.component";

import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: WelcomeHowComponent
  },
];

@NgModule({
  declarations: [
    WelcomeHowComponent
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
export class WelcomeHowModule {
}
