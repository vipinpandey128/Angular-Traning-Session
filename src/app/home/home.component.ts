import { Component, OnInit } from '@angular/core';
import { Test } from './model/Test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 student:Test = new Test();
  constructor() {

    this.student.Id=1;
    this.student.Name='Ram'

   }

  ngOnInit(): void {

  }

 

}
