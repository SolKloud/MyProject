import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  taskDetails:{name:string,status:string}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe((data:Data)=>{
      this.taskDetails=data['task'];
      console.log(this.taskDetails);
    })
  }

}
