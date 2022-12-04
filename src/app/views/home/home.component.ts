import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit {
  employeeForm: FormGroup;

  educationList = [
    { title: 'Ensino médio'},
    { title: 'Graduação'},
    { title: 'Pós Graduação'},
    { title: 'PhD'}
  ]
	constructor( private fb: FormBuilder ) {
    this.employeeForm = fb.group({});
  }

  ngOnInit(){
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(null),
      lastname: this.fb.control(null),
      birthday: this.fb.control(null),
      gender: this.fb.control(null),
      education: this.fb.control('default'),
      company: this.fb.control(null),
      jobExperience: this.fb.control(null),
      salary: this.fb.control(null),
    });
  }

  RegisterUser() {
    console.log('Formulário');
  }
}
