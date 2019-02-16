import {Component, OnInit} from '@angular/core';
import {ImageApiService} from "~/core/services/ImageApi.service";
import * as camera from "nativescript-camera";

@Component({
  selector: 'ns-camera-medicine',
  templateUrl: './camera-medicine.component.html',
  styleUrls: ['./camera-medicine.component.css'],
  moduleId: module.id,
})
export class CameraMedicineComponent implements OnInit {

  constructor(private imageApiService: ImageApiService) {
  }

  ngOnInit() {
    // Init your component properties here.
    camera.requestPermissions().then(
      function success() {
        const that = this;
        camera.takePicture().then(image => {
          that.imageApiService.sendImage(image.nativeImage);

        });
      },
      function failure() {
        // permission request rejected
        // ... tell the user ...
      }
    );
  }

}
