import {Component, OnInit} from '@angular/core';
import {ImageApiService} from "~/core/services/ImageApi.service";
import * as camera from "nativescript-camera";
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
  selector: 'ns-camera-medicine',
  templateUrl: './camera-medicine.component.html',
  styleUrls: ['./camera-medicine.component.css'],
  moduleId: module.id,
})
export class CameraMedicineComponent implements OnInit {

  constructor(private router: RouterExtensions, private imageApiService: ImageApiService) {
  }

  ngOnInit() {
  }

  takePicture(event) : void {
    // Init your component properties here.
    camera.requestPermissions().then(
      () => {
        const that = this;
        camera.takePicture().then(image1 => {
          console.log("OK first!");

          camera.takePicture().then(image2 => {
            console.log("OK! second");
            that.imageApiService.sendImage(image1.nativeImage, image2.nativeImage).subscribe(
              () => {
                console.log("Yay!");
              },
              (e) => {
                console.log("Nay...", e);
              }
            );

          });

        });
      },
      () => {
        // permission request rejected
        // ... tell the user ...
      }
    );
  }
}
