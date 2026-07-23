import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persons } from 'src/app/classes/persons';

@Injectable({
  providedIn: 'root'
})
export class OublisService {

  base = `${environment.apiBase}/api`;

  constructor(private httpClient: HttpClient) { }

  getClassement(saisonId: number): Observable<Persons[]> {
    return this.httpClient.get<Persons[]>(`${this.base}/saisons/${saisonId}/classement`);
  }
}
