import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../customValidators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectForm: FormGroup;
  forbiddenProjectName = ["Test"];
  projectStatusList = ["Stable", "Critical", "Finished"];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvaidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl('critical')
    });
  }

  submitProjectForm() {
    console.log(this.projectForm);  
  }

}
