import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name: string = 'Angular ' + VERSION.major + '.' + VERSION.minor;
  public title: string = "Tour of Heroes";
}
