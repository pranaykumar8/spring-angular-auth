// src/app/components/signin/signin.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private signinService: SigninService, private router: Router) {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  user
   onSignin() {
   this.signinService.checkuser(this.signinForm.value.username,this.signinForm.value.password).subscribe(
    (res)=>{
      if(res==1){
        this.router.navigateByUrl("/instafeed")
        this.user=res
      }
      else{
        alert("Credential incorrect")
        this.router.navigateByUrl("/siginin")
      }
    }
   ) 
   }
}
