import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import Event from '../Event';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  events: Event[];
  event: any = {};
  angularForm: FormGroup;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private eventService: EventService, 
    private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.angularForm = this.formBuilder.group({
      event_name: ['', Validators.required],
      event_place: ['', Validators.required],
      event_date: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);  
      this.eventService.editEvent(params['id']).subscribe((res) => {
        this.event = res;          
      });
    });
  
    // this code is for getEventById(id) function
    this.getEventById(this.route.snapshot.params['id']);
     
  }
  updateEvent(event_name, event_place, event_date) {
    this.route.params.subscribe((params) => {
      this.eventService.updateEvent(params['id'], event_name, event_place, event_date);  
      this.eventService.getEvent().subscribe((data: Event[]) => {
        this.events = data;
        this.router.navigate(['event']);
      });
    });
  }
  getEventById(id){
    this.eventService.editEvent(id)
    .subscribe((data) => {
      console.log(data);
      this.event = data;
      this.angularForm.setValue({
        event_name: this.event.event_name,
        event_place: this.event.event_place,
        event_date: this.event.event_date
      });
    } );
  }
}


