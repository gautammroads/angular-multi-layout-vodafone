import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Announce } from './announce';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 model: any = {};


  ngOnInit() {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  

}