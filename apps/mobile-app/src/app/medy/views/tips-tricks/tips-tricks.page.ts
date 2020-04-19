import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medy-tips-tricks',
  templateUrl: './tips-tricks.page.html',
  styleUrls: ['./tips-tricks.page.scss']
})
export class TipsTricksPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tipsList = [
    {title:'How to prevent?', icon:'', tip:2, id:'1'},
    {title:'How to prevent?', icon:'', tip:2, id:'2'},
    {title:'How to prevent?', icon:'', tip:2, id:'3'},
    {title:'How to prevent?', icon:'', tip:2, id:'4'},
    {title:'How to prevent?', icon:'', tip:2, id:'5'},
    {title:'How to prevent?', icon:'', tip:2, id:'6'},
  ]

  public openTip(id:string){
    console.log(id);
    
  }

}
