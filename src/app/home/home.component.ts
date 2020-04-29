import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

import Event from '../Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  events: Event[];

  constructor(private es: EventService) { }

  ngOnInit() {
    this.es.getEvent().subscribe((data: Event[]) => {
      this.events = data;
    });
  }
}