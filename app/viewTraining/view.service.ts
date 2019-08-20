import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Announce } from '../announceTraining/announce';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};

@Injectable()
export class ViewService {

 announce:Announce;


   
baseUrl='http://localhost:8082/OnPremPoc';

  constructor(private http: HttpClient) { }


  getTrainingDetails (): Observable<Announce[]> {
    
return this.http.get<Announce[]>(this.baseUrl+'/getAllActiveTrainings');
  }

/** POST: add a new hero to the database */
traineeNomination(announce: Announce): Observable<Announce> {
    return this.http.post<Announce>(this.baseUrl+'/nomination', announce);


  }

}