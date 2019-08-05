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


   
msgUrl='http://localhost:8082/OnPremPoc/postdata';

  constructor(private http: HttpClient) { }


/** POST: add a new hero to the database */
  announceTraining(announce: Announce): Observable<Announce> {
    return this.http.post<Announce>(this.msgUrl, announce);


  }


    /** GET heroes from the server */

  getHeroes (): Observable<Message> {
    
return this.http.get<Message>(this.msgUrl);
  }



}