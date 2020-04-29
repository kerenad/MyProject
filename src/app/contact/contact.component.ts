import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msgForm: FormGroup;
  submitted = false;
  success = false;
  // DI for FormBuilder
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.msgForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.msgForm.invalid){
      return;
    }
    this.success = true;
  }
 }
