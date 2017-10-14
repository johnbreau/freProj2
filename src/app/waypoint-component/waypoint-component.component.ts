import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;

@Component({
  selector: 'app-waypoint-component',
  templateUrl: './waypoint-component.component.html',
  styleUrls: ['./waypoint-component.component.scss']
})
export class WaypointComponentComponent implements OnInit {
  private waypoint: any;
  private direction: string;
  constructor(
  ) {
   }

  ngOnInit() {
    const myContainer = <Element>document.querySelector('.littlebox');

    this.waypoint = new Waypoint({
      element: document.getElementById('my-waypoint'),
      handler: (direction) => {
        if (direction === 'down') {
         myContainer.classList.add('animation-down');
         myContainer.classList.remove('animation-up');
        }
        if (direction === 'up') {
          myContainer.classList.add('animation-up');
          myContainer.classList.remove('animation-down');
        }
      }
    });
  }

}
