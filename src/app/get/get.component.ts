import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';

import Event from '../Event';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  events: Event[];

  constructor(private es: EventService) { }

  ngOnInit() {
    this.es.getEvent().subscribe((data: Event[]) => {
      this.events = data;
    });
  }

  deleteEvent(id){
    this.es.deleteEvent(id).subscribe(data => {
      this.es.getEvent().subscribe((data: Event[]) => {
        this.events = data;
      });
      console.log('Deleted!');
    });
  }

}
