

import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest ,Observable} from 'rxjs';
import { take ,switchMap} from 'rxjs/operators';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';
import { ViewService } from '../viewTraining/view.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';



@Component({
  selector: 'app-home',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {


id:number;
announce?:Observable<any[]>;
data:any[]
  group = {};


  superlatives$ = new BehaviorSubject<{[superlativeName: string]: string}>({});
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  displayedColumns$ = new BehaviorSubject<string[]>([
    'courseName',
    'traineeName',
    'venueName',
    'trainerName',
    'courseDuration',
    'nDueDate',
    'exportTrainee'
    
    

  ]);
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(5);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('courseName');
  sortDirection$ = new BehaviorSubject<string>('asc');

 constructor(private route: ActivatedRoute,private viewService:ViewService) {}

 

  ngOnInit() {
 this.route.queryParams.subscribe(
       params => {

this.id= params['id'];
      }
     )

this.announce=this.viewService.getNominationByManagerID(this.id);



    combineLatest(this.tableDataSource$, this.currentPage$, this.pageSize$)
    .subscribe(([allSources, currentPage, pageSize]) => {
      const startingIndex = (currentPage - 1) * pageSize;
      const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
      this.dataOnPage$.next(onPage);
    });

    this.announce.pipe(take(1)).subscribe(heroData => {
      this.tableDataSource$.next(Object.values(heroData));
    });

    combineLatest(this.announce, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$)
    .subscribe(([changedHeroData, searchTerm, sortKey, sortDirection]) => {
      const heroesArray = Object.values(changedHeroData);
      let filteredHeroes: any[];

      if (!searchTerm) {
        filteredHeroes = heroesArray;
      } else {
        const filteredResults = heroesArray.filter(hero => {
          return Object.values(hero)
            .reduce((prev, curr) => {
              return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase());
            }, false);
        });
        filteredHeroes = filteredResults;
      }

      const sortedHeroes = filteredHeroes.sort((a, b) => {
        if(a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
        if(a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
        return 0;
      });

      this.tableDataSource$.next(sortedHeroes);
    });

    this.searchFormControl.setValue('');

    
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }

    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }


 

exportTrainee(){
alert(JSON.stringify(json));
const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ['CouseName', 'TraineeName', 'Venue']
    };
   let resut=[]
   let group = {CouseName: String,TraineeName: String,Venue: String};
   this.announce.subscribe(data=>)

    group.CouseName=json.announceTraining.courseName;
    group.TraineeName=json.user.name;
    
    group.Venue=json.announceTraining.venueName;

resut.push(group);
   new Angular2Csv(resut, 'My Report', options);
 

}
}