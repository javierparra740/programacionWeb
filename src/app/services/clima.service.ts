import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
providedIn: "root"
})
export class ClimaService {

  constructor(private http: HttpClient) {}

  getClima(): Observable<any>{
    const longitud = ``
    const latitud = ``
    return this.http.get(`http://www.7timer.info/bin/civillight.php?lon=[${longitud}]&lat=[${latitud}]&ac=0&unit=metric&output=json`);
  }
}
