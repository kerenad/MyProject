import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { EventService } from '../event.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
            private es: EventService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.myForm = this.formBuilder.group({
      event_name: ['', Validators.required],
      event_place: ['', Validators.required],
      event_date: ['', Validators.required]
    });
  }

  addEvent(event_name, event_place, event_date){
    return this.es.addEvent(event_name, event_place, event_date);
  }

}
