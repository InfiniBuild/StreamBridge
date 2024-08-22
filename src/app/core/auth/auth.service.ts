import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  api = environment.baseUrl
  id=''
  email=''

  clientSignup(data:any):Observable<any>{
    const signupApi=`${this.api}/client/signup`

    return this.http.post(signupApi,data)
  }
}
