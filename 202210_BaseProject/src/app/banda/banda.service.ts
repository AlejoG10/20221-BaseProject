import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Banda } from './banda';

@Injectable({
  providedIn: 'root',
})
export class BandaService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }

}
