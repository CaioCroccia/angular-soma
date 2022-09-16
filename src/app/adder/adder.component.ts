import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {
  @Input() n1: String;
  @Input() n2: String;


  
  constructor() { }

  ngOnInit() {
  }

}