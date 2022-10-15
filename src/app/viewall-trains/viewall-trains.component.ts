import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-trains',
  templateUrl: './viewall-trains.component.html',
  styleUrls: ['./viewall-trains.component.css']
})
export class ViewallTrainsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewTrainlist().subscribe(
      (data)=>{
        this.viewTrainlist=data
      }
    )
   }
      
    
 viewTrainlist:any={}


  ngOnInit(): void {
  }

}
