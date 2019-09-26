import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Announce } from '../announceTraining/announce';

import {saveAs}  from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};

@Injectable()
export class ViewService {

 announce:Announce;


   
baseUrl='http://192.168.113.85:8082/OnPremPoc';

  constructor(private http: HttpClient) { }


  getTrainingDetails (): Observable<Announce[]> {
    
return this.http.get<Announce[]>(this.baseUrl+'/getAllActiveTrainings');
  }

/** POST: add a new hero to the database */
traineeNomination(announce: Announce): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/nomination', announce);

  }

  getNominationByTrainingId(id:number): Observable<any> {

return this.http.get<any>(this.baseUrl+'/getTraineeListBytrainingId/'+id);
  }

  exportCsvNominationByeTrainingID(id:number) {
   
return this.http.get(this.baseUrl+'/getTraineeListByExportById/'+id);
  }




}