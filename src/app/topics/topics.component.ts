import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topicsForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.topicsForm = new FormGroup({
      "topics": new FormArray([])
    });
  }

  addTopics(inputVal: HTMLInputElement) {
    this.topics.push(new FormControl(inputVal.value));
    inputVal.value = '';
    console.log(this.topics.controls);
  }

  get topics() {
    return (this.topicsForm.get("topics") as FormArray)
  }

}
