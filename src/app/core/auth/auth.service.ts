import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token') || '';
      this.fullName = localStorage.getItem('fullName') || '';
    }
  }

  api = environment.baseUrl
  id=''
  email=''
  token=''
  fullName=''

  clientSignup(data:any):Observable<any>{
    const signupApi=`${this.api}/client/signup`

    return this.http.post(signupApi,data)
  }
  
  signupOtpVerification(data:any):Observable<any>{
    const signupOtpVerificationApi=`${this.api}/client/signupOtpVerification`
      
    return this.http.post(signupOtpVerificationApi,data)
  }
  
  signupResendOtp():Observable<any>{
    const signupResendOtpApi=`${this.api}/client/signupResendOtp`

    return this.http.post(signupResendOtpApi,{id:this.id})
  }

  
  login(data: any):Observable<any>{
    const loginApi=`${this.api}/client/login`

    return this.http.post(loginApi,data)
  }
}
