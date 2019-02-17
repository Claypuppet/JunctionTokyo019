import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: "root"
})
export class ImageApiService {

  constructor(private http: HttpClient) {
  }

  public sendImage(imageFront: any, imageBack: any): Observable<any> {
    console.log("hey hey");
    return this.http.post('http://10.8.0.2:5000/extract', {imagefront: imageFront, imageback: imageBack});
  }
}
