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
fileToUpload: File = null;

constructor(private registerService:RegisterService ) { 
 
}

  ngOnInit() {
 this.model.nDueDate= new Date().toISOString().substring(0, 10);
 this.model.tStartDate= new Date().toISOString().substring(0, 10);
 this.model.tEndDate= new Date().toISOString().substring(0, 10);
  }



handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
   // this.model.file=this.fileToUpload ;
}

  postTraining(): void {

    this.registerService.announceTraining(this.model,this.fileToUpload)
      .subscribe(message => this.announcedata = message);

//alert(this.fileToUpload.name);
  }

announceTraining():void{
 this.postTraining();


}

  



}