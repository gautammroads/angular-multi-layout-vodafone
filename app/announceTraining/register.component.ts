import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Announce } from './announce';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

announce:Announce;

  constructor(private registerService:RegisterService) { }


  ngOnInit() {
    this.announce.venue="pune";
  }

}