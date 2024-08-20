import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-for-pass-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './for-pass-component.component.html',
  styleUrl: './for-pass-component.component.css'
})
export class ForPassComponentComponent {
  forgotPasswordForm: FormGroup;
  showPasswordField: boolean = false;
  emailSubmitted: boolean = false;
  btnDisable:boolean=false

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.get('email')?.valid && !this.emailSubmitted) {
      this.btnDisable=true
      

      this.showPasswordField = true;
      this.emailSubmitted = true;
      this.forgotPasswordForm.get('email')?.disable();
    } else if (this.emailSubmitted && this.forgotPasswordForm.get('newPassword')?.valid) {

      console.log('Password reset submitted');
    }
  }
}
