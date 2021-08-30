import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environments/environment';


const AUTH_API = 'https://dca7-2402-800-6205-84b6-c1ff-d4f4-24b9-5259.ngrok.io';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(data:any): Observable<any>{

    return this.http.post(`${AUTH_API}/user/login-account`, data, httpOptions)

  }
}
