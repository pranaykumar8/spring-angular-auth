// src/app/components/instagram/instagram.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {
  instagramForm: FormGroup;

  constructor(private fb: FormBuilder, private instagramService: InstagramService,private router:Router) {
    this.instagramForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dob: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.instagramForm.valid) {
      this.instagramService.saveInstagram(this.instagramForm.value).subscribe(
        response => {
          console.log('Instagram data saved:', response);
          alert('Data saved successfully!');
          this.router.navigateByUrl('/signin')
          
        },
        error => {
          console.error('Error saving data:', error);
          alert('Failed to save data.');
        }
      );
    }
  }
}
