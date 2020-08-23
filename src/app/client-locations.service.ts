import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  readonly API_URL:string = '//localhost:8080/api/clientlocations';

  constructor(private httpClient : HttpClient) {
  }

  getClientLocations() : Observable<ClientLocation[]> {
    return this.httpClient.get<ClientLocation[]>(this.API_URL, { responseType : "json"});
  }
}
