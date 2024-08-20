import { Component, OnInit, Output } from '@angular/core';
import { NgOtpInputModule } from  'ng-otp-input';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent  {

  enteredOtp!:string
  userId:string=''

  onOtpChange(data:any){
    this.enteredOtp=data      
  }

  onSubmit(){
    if (this.enteredOtp.length == 4) {
        const obj={id:this.userId,otp:this.enteredOtp}
        console.log(obj);
        
    }
  }

  resentOtp(){
    
  }

}
