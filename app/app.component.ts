import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Message } from './message';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  message:Message;
 

 constructor(private dataService: DataService) { }

  getHeroes(): void {
    this.dataService.getHeroes()
      .subscribe(message => this.message = message);
  }
 ngOnInit() {
  this.getHeroes();
  }



}
