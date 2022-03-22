import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public $isTheApiAlive = this.appService.isMyApiAlive();

  public constructor(private appService: AppService) {}
}
