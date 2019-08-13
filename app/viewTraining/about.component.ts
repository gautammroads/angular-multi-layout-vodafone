import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Announce } from '../announceTraining/announce';
import { Observable } from 'rxjs';

import { FormControl } from '@angular/forms';
import { ViewService } from './view.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent  implements OnInit {
  announce:Announce[];
heroes$ = new BehaviorSubject<{[courseName: string]: any}>({
    'Hammerer Maccabeus': {
      courseName: 'Spring Boot',
      attack: '06/09/2017',
      defense: '06/09/2017',
      venueName: 'Pune',
       healing: 'Active',
      recovery: 154
      
     
    },
    'Ethereal Moodmorph': {
      courseName: 'Angular',
      attack: '06/09/2017',
      defense: '06/09/2017',
      venueName: 'Pune',
       healing: 'Active',
      recovery: 178
    
    },
    'Dwarf Bronnis': {
      courseName: 'Node js',
      attack: '06/09/2017',
      defense: '06/09/2017',
      healing: 'Active',
      recovery: 153,
     venueName: 'Pune'
    },
    'Lady Sabrina': {
      courseName: 'Java',
      attack: '06/09/2017',
      defense: '06/09/2017',
       healing: 'Active',
      recovery: 105,
     venueName: 'Pune'
    },
    'Techno Fox': {
      courseName: 'Machine learning',
      attack: '06/09/2017',
      defense: '06/09/2017',
       healing: 'Active',
      recovery: 184,
      venueName: 'Pune'
    },
    'Cleric Typh': {
      courseName: 'Testing Tool',
      attack: '06/09/2017',
      defense: '06/09/2017',
       healing: 'Active',
      recovery: 272,
      venueName: 'Pune'
    },
    'Technician Dustin': {
      courseName: 'Aws',
      attack: '06/09/2017',
      defense: '06/09/2017',
     healing: 'Active',
      recovery: 144,
      venueName: 'Pune'
    },
    'Dancer Galileo': {
      courseName: 'Spring Data',
      attack: '06/09/2017',
      defense: '06/09/2017',
      healing: 'Active',
      recovery: 168,
      venueName: 'Pune'
    }
  });
  superlatives$ = new BehaviorSubject<{[superlativeName: string]: string}>({});
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  displayedColumns$ = new BehaviorSubject<string[]>([
    'courseName',
    'attack',
    'defense',
    'venueName',
    'healing',
    'applyTraining'
    
  ]);
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(5);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('courseName');
  sortDirection$ = new BehaviorSubject<string>('asc');

  constructor(private viewService:ViewService) { }

  ngOnInit() {

   this.viewService.getTrainingDetails().subscribe(message => this.announce=message);
   

    combineLatest(this.tableDataSource$, this.currentPage$, this.pageSize$)
    .subscribe(([allSources, currentPage, pageSize]) => {
      const startingIndex = (currentPage - 1) * pageSize;
      const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
      this.dataOnPage$.next(onPage);
    });

    this.heroes$.pipe(take(1)).subscribe(heroData => {
      this.tableDataSource$.next(Object.values(heroData));
    });

    combineLatest(this.heroes$, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$)
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

  applyTraining(heroName: string) {

     

    alert("Test "+JSON.stringify(this.announce));
    
    
  }

}