import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public page = 'home';
  public featuredOnly = true;

  constructor() { }

  ngOnInit() {
  }

}
