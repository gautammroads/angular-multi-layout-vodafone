import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
heroes$ = new BehaviorSubject<{[name: string]: any}>({
    'Hammerer Maccabeus': {
      name: 'Spring Boot',
      types: 'Mitali',
    
      attack: '06/09/2017',
      defense: '06/09/2017',
     speed: 'Pune',
       healing: 'Active',
      recovery: 154

     
    },
    'Ethereal Moodmorph': {
      name: 'Angular',
      types: 'Sagar',
     
      attack: '06/09/2017',
      defense: '06/09/2017',
      speed: 'Pune',
       healing: 'Active',
      recovery: 178
    
    },
    'Dwarf Bronnis': {
      name: 'Node js',
      types: 'Gautam kumar',
     
      attack: '06/09/2017',
      defense: '06/09/2017',
      healing: 'Active',
      recovery: 153,
     speed: 'Pune'
    },
    'Lady Sabrina': {
      name: 'Java',
      types: 'Watner',
     
      attack: '06/09/2017',
      defense: '06/09/2017',
       healing: 'Active',
      recovery: 105,
     speed: 'Pune'
    },
    'Techno Fox': {
      name: 'Machine learning',
      types: 'jackson',
      
      attack: '06/09/2017',
      defense: '06/09/2017',
       healing: 'Active',
      recovery: 184,
      speed: 'Pune'
    },
    'Cleric Typh': {
      name: 'Testing Tool',
      types: 'sourav',
      
      attack: '06/09/2017',
      defense: '06/09/2017',
       healing: 'Active',
      recovery: 272,
      speed: 'Pune'
    },
    'Technician Dustin': {
      name: 'Aws',
      types: 'Yogi',
     
      attack: '06/09/2017',
      defense: '06/09/2017',
     healing: 'Active',
      recovery: 144,
      speed: 'Pune'
    },
    'Dancer Galileo': {
      name: 'Spring Data',
      types: 'gajveer',
     
      attack: '06/09/2017',
      defense: '06/09/2017',
      healing: 'Active',
      recovery: 168,
      speed: 'Pune'
    }
  });
  superlatives$ = new BehaviorSubject<{[superlativeName: string]: string}>({});
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'types',
    'attack',
    'defense',
    'speed',
    'healing',
    'levelUp',
    'rejectUp'
  ]);
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(5);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');

  constructor() { }

  ngOnInit() {
    this.heroes$.subscribe(changedHeroData => {
      const superlatives = {
        'highest-defense': null,
        'lowest-defense': null,
        'highest-speed': null,
        'lowest-speed': null,
        'highest-healing': null,
        'lowest-healing': null,
        'highest-recovery': null,
        'lowest-recovery': null,
        'highest-health': null,
        'lowest-health': null
      };

      Object.values(changedHeroData).forEach(hero => {
        Object.keys(hero).forEach(key => {
          if (key === 'name' || key === 'types') { return; }

          const highest = `highest-${key}`;
          if (!superlatives[highest] || hero[key] > changedHeroData[superlatives[highest]][key]) {
            superlatives[highest] = hero.name;
          }

          const lowest = `lowest-${key}`;
          if (!superlatives[lowest] || hero[key] < changedHeroData[superlatives[lowest]][key]) {
            superlatives[lowest] = hero.name;
          }
        });
      });

      this.superlatives$.next(superlatives);
    });

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

  levelUp(heroName: string) {
    const updatedHero = { ... this.heroes$.value[heroName] };
    updatedHero.attack = Math.round(updatedHero.attack * (1 + (Math.random() / 8)));
    updatedHero.defense = Math.round(updatedHero.defense * (1 + (Math.random() / 8)));
    updatedHero.speed = Math.round(updatedHero.speed * (1 + (Math.random() / 8)));
    updatedHero.recovery = Math.round(updatedHero.recovery * (1 + (Math.random() / 8)));
    updatedHero.healing = Math.round(updatedHero.healing * (1 + (Math.random() / 8)));
    

    const newHeroData = { ... this.heroes$.value };
    newHeroData[heroName] = updatedHero;

    this.heroes$.next(newHeroData);
  }
rejectUp(heroName: string) {
    const updatedHero = { ... this.heroes$.value[heroName] };
    updatedHero.attack = Math.round(updatedHero.attack * (1 + (Math.random() / 8)));
    updatedHero.defense = Math.round(updatedHero.defense * (1 + (Math.random() / 8)));
    updatedHero.speed = Math.round(updatedHero.speed * (1 + (Math.random() / 8)));
    updatedHero.recovery = Math.round(updatedHero.recovery * (1 + (Math.random() / 8)));
    updatedHero.healing = Math.round(updatedHero.healing * (1 + (Math.random() / 8)));
   

    const newHeroData = { ... this.heroes$.value };
    newHeroData[heroName] = updatedHero;

    this.heroes$.next(newHeroData);
  }

}