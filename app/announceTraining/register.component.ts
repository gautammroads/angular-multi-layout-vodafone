import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { Announce } from './announce';
import { Message } from '../message';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
model: any={};
message:Message;
announcedata?: Announce;
announce?: Announce[];

constructor(private registerService:RegisterService ) { }

  ngOnInit() {

  }


  postTraining(): void {
    this.registerService.announceTraining(JSON.parse(JSON.stringify(this.model)))
      .subscribe(message => this.announcedata = message);

  }

announceTraining():void{
 this.postTraining();


}
  

}