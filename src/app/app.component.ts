import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNamesArr = ["Andy", "Sam"]

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    })

    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      'gender': 'male'
    })
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl) : {[k: string]: boolean} { 
    if(this.forbiddenNamesArr.includes(control.value)) {
      return {nameFormbidden: true};
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'test@gmail.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }
}
