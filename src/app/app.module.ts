import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import { ScheduleMedicineComponent } from './my-schedule/schedule-medicine/schedule-medicine.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    ScheduleMedicineComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
