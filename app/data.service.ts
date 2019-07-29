import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from './message';

@Injectable()
export class DataService {

  
msgUrl='http://localhost:8082/OnPremPoc/get';

  constructor(private http: HttpClient) { }


  /** GET heroes from the server */
  getHeroes (): Observable<Message> {
    return this.http.get<Message>(this.msgUrl);
  }


}