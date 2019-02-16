import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {MyScheduleComponent} from "~/app/my-schedule/my-schedule.component";

import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MyScheduleComponent
  },
];

@NgModule({
  declarations: [
    MyScheduleComponent
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
export class MyScheduleModule {
}
