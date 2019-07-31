import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RegisterService {

   
msgUrl='http://localhost:8082/OnPremPoc/get';

  constructor(private http: HttpClient) { }




}