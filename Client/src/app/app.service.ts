import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly urlBase = 'https://localhost:7157/';

  constructor(private httpClient: HttpClient) {}

  public isMyApiAlive(): Observable<boolean> {
    return this.httpClient.get<boolean>(this.urlBase + 'Simple/AmIAlive');
  }

}
