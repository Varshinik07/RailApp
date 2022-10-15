import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall-trains',
  templateUrl: './viewall-trains.component.html',
  styleUrls: ['./viewall-trains.component.css']
})
export class ViewallTrainsComponent implements OnInit {

  constructor() { }

name="john"

readValues=()=>{
  this.name="khyny"
}

  ngOnInit(): void {
  }

}
