import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public x="Friends";
  constructor() { }

  ngOnInit() {
   
  }
onclick()
{
  this.x = this.x+"...Bheerender";
  this.x = this.x+"...Bhanu";
  this.x = this.x+"...Sha";
  this.x = this.x+"...Santhu";
  this.x = this.x+"...harshu";

}

}