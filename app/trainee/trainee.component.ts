import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest ,Observable} from 'rxjs';
import { take ,switchMap} from 'rxjs/operators';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
  selectedId: Observable<string>;
  id: number;

 constructor(private route: ActivatedRoute) {}

  ngOnInit() {
this.route.queryParams.subscribe(
      params => {
        console.log('Got the JWT as: ', params['id']);
        this.id =  params['id'];
      }
    )
  }

}