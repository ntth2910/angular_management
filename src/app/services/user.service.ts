import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../common/User';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  private changeString: string ='https://dca7-2402-800-6205-84b6-c1ff-d4f4-24b9-5259.ngrok.io';

  private RES_API_DROPDOWNS: string =
    this.changeString + '/user/get_all_user';

  private POST_NEW_USER: string =
    this.changeString + '/user/create-account/';

  private DELETE_USER: string = this.changeString + '/user/remove-account/';


  private POST_LOGIN: string =
    this.changeString + '/user/login-account';


  private GET_ONE_USER_BY_ID: string =
    this.changeString + '/user/get_one_account/';

    private POST_EDIT_USER: string =
    this.changeString + '/user/update-account/';


  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
const url = this.RES_API_DROPDOWNS;
    return this.http.get<any>(url, this.httpOptions);

  }
  getUserById(id:any): Observable<any> {
    const url = this.GET_ONE_USER_BY_ID + `${id}`;
    return this.http.get<any>(url, this.httpOptions);
  }
  create(data: any): Observable<any> {
    let url = this.POST_NEW_USER;
    return this.http.post<any>(url, data, this.httpOptions);
  }
  update(id: any, data: any): Observable<any> {
    const url = this.POST_EDIT_USER + `${id}`;
    return this.http.put<any>(url, data, this.httpOptions);
  }
  deleteUserById(id: any): Observable<any> {
    const url = this.DELETE_USER + `${id}`;
    return this.http.delete(url, this.httpOptions);
  }



}
