import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { Announce } from './announce';
import { Message } from '../message';
import { NgForm } from '@angular/forms'


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

constructor(private registerService:RegisterService ) { 
 
}

  ngOnInit() {
 this.model.nDueDate= new Date().toISOString().substring(0, 10);
 this.model.tStartDate= new Date().toISOString().substring(0, 10);
 this.model.tEndDate= new Date().toISOString().substring(0, 10);
  }


  postTraining(): void {
    this.registerService.announceTraining(JSON.parse(JSON.stringify(this.model)))
      .subscribe(message => this.announcedata = message);

  }

announceTraining(f:NgForm):void{
 this.postTraining();


}

  



}