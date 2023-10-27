import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  baseHeader = {
    Connection: 'keep-alive',
  };
  constructor(private httpClient: HttpClient){

  }
  get<T>(url: string, header?: any): Observable<T>{
    const apiHeader = {...this.baseHeader,...header};
    return this.httpClient.get<T>(url, {headers: apiHeader});
  }

  post<T>(url: string, body: any, header?: any): Observable<T>{
    const apiHeader = {...this.baseHeader,...header};
    return this.httpClient.post<T>(url, body,{headers: apiHeader});
  }

  put<T>(url: string, body: any, header?: any): Observable<T>{
    const apiHeader = {...this.baseHeader,...header};
    return this.httpClient.put<T>(url, body,{headers: apiHeader});
  }

  delete<T>(url: string, body: any, header?: any): Observable<T>{
    const apiHeader = {...this.baseHeader,...header};
    return this.httpClient.delete<T>(url, {headers: apiHeader});
  }
}
