import { Component, OnInit } from '@angular/core';
import { MyServicelist } from '../my-servicelist.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  allCharacters: any;


  constructor(
    private serviceOne: MyServicelist
    
    ) { }

  ngOnInit() {
    this.serviceOne.getAllCharacters().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
  }
}
