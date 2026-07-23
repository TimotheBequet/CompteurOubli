import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Saison } from 'src/app/classes/persons';

@Injectable({
  providedIn: 'root'
})
export class SaisonsService {

  base = `${environment.apiBase}/api`;

  constructor(private httpClient: HttpClient) {}

  getSaisons(): Observable<Saison[]> {
    return this.httpClient.get<Saison[]>(`${this.base}/saisons`);
  }
}
