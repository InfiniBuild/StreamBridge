import { Component, OnInit, Output } from '@angular/core';
import { NgOtpInputModule } from  'ng-otp-input';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent  implements OnInit{

  constructor (private authService: AuthService){}
  
    enteredOtp! : string
    userId : string=''
    email: string = ''

  ngOnInit() {
    this.userId = this.authService.id
    this.email = this.authService.email
  }

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
