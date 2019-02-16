import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {WelcomeWhatComponent} from "~/app/welcome/welcome-what/welcome-what.component";

import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: WelcomeWhatComponent
  },
];

@NgModule({
  declarations: [
    WelcomeWhatComponent
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
export class WelcomeWhatModule {
}
