import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EditProfileComponent } from './edit-profile.component';

import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: EditProfileComponent
  },
];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EditProfileModule { }
