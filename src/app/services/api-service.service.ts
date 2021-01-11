import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }
  callAPI(method: string, apiData, APIEndPoint): Observable<any> {
    if (method.toLowerCase() == "post") {
      return Observable.create(observer => {
        this.http
          .post(this.baseUrl + APIEndPoint, apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    } else if (method.toLowerCase() == "get") {
      return Observable.create(observer => {
        this.http
          .get(this.baseUrl + APIEndPoint + "?" + apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    } else if (method.toLowerCase() == "put") {
      return Observable.create(observer => {
        this.http
          .put(this.baseUrl + APIEndPoint, apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    } else if (method.toLowerCase() == "delete") {
      return Observable.create(observer => {
        this.http
          .delete(this.baseUrl + APIEndPoint, apiData)
          .subscribe((data: any) => {
            observer.next(data);

            observer.complete();
          });
      });
    }
  }
}
