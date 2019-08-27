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
export class ApprovalService {
baseUrl='http://localhost:8082/OnPremPoc';

 constructor(private http: HttpClient) { }


getNominationByManagerID(): Observable<any> {
    
return this.http.get<any>(this.baseUrl+'/getNomination');
  }

approveTraining(userNomination:any): Observable<any> {
    
return this.http.post<any>(this.baseUrl+'/approveTraining',userNomination);
  }

rejectTraining(userNomination:any): Observable<any> {
    
return this.http.post<any>(this.baseUrl+'/rejectTraining',userNomination);
  }
}