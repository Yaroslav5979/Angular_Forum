import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title: string = 'Wellcome to the Forum'
  constructor() { }

  ngOnInit() {
    //  this.timer
  }
  // timer(){
  //   setTimeout(() =>
  //   this.title.hide(),5000)
  // }

}
