import { Component, OnInit } from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';


import {Headers, Response} from '@angular/http';


import 'rxjs/Rx';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}