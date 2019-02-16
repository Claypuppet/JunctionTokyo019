import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class ImageApiService {

  constructor(private http: HttpClient) {
  }

  public sendImage(nativeImage: any) {
    this.http.post('http://192.168.20.177:5000/extract', {})
  }
}
