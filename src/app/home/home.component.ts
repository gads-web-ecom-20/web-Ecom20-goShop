import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(sectionId) {
    let element = document.getElementById(sectionId);
    
      if(element) {
        element.scrollIntoView(); 
      }
     }
}
