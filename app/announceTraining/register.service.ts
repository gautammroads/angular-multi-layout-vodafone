import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Announce } from './announce';
import { Message } from '../message';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};

@Injectable()
export class RegisterService {

announce:Announce;


   
baseUrl='http://localhost:8082/OnPremPoc';

  constructor(private http: HttpClient) { }


/** POST: add a new hero to the database */
 announceTraining(modal: any,file:File): Observable<Announce> {
let formData:FormData = new FormData();
formData.append('file', file, file.name);
formData.append('announce', new Blob([JSON.stringify(modal)],
        {
            type: "application/json"
        }));

    return this.http.post<Announce>(this.baseUrl+'/postdata', formData);


  }




  getTrainingDetails (): Observable<Announce[]> {
    
return this.http.get<Announce[]>(this.baseUrl+'/getAllActiveTrainings');
  }



}