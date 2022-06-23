import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorString:string;
  constructor(private route:ActivatedRoute) { }


  //to get data from route
  ngOnInit(): void {
    this.errorString=this.route.snapshot.data['message'];
  }

}
