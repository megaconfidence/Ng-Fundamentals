import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
declare let toastr;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styles: [
    `
      h1 {
        color: #fff;
      }
    `
  ]
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) {}
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
