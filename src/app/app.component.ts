import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedElement='recipes';

  onNavigation(event){

    this.selectedElement=event;
  }

 




}
