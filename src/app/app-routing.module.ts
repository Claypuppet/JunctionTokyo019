import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "welcome",
  },
  {
    path: "scan-result",
    loadChildren: "./scan-result/scan-result.module#ScanResultModule"
  },
  {
    path: "camera-medicine",
    loadChildren: "./camera-medicine/camera-medicine.module#CameraMedicineModule"
  },
  {
    path: "my-profile",
    loadChildren: "./my-profile/my-profile.module#MyProfileModule"
  },
  {
    path: "my-schedule",
    loadChildren: "./my-schedule/my-schedule.module#MyScheduleModule"
  },
  {
    path: "scan-medicine",
    loadChildren: "./scan-medicine/scan-medicine.module#ScanMedicineModule"
  },
  {
    path: "welcome",
    loadChildren: "./welcome/welcome.module#WelcomeModule"
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
