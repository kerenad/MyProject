import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  uri = 'http://localhost:4000/event';
  
  constructor(private http: HttpClient) { }
  addEvent(event_name, event_place, event_date) {
    const myObj = {
      event_name: event_name,
      event_place: event_place,
      event_date: event_date
    };
    this.http.post(`${this.uri}/add`, myObj).subscribe(res => console.log('Done!'));
  }
  getEvent() {
    return this.http.get(`${this.uri}`);
  }
  editEvent(id) {
     console.log('Edit event!');
     return this.http.get(`${this.uri}/get/${id}`);
  }
  
  updateEvent(id, event_name, event_place, event_date) {
    const obj = {
      event_name: event_name,
      event_place: event_place,
      event_date: event_date
    };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe((res) => {
      console.log('Updated');
    });
  }

  deleteEvent(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
