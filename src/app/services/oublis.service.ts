import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OublisService {

  base = 'https://compteur-oublis.timothe-bequet.fr/api';

  constructor(private httpClient: HttpClient) { }

  getOublis(saison: number): Observable<any[]> {
    const body = {'year': saison};
    return this.httpClient.post<any[]>(`${this.base}/oublis`, body).pipe(
      map((oubli) => {
        return oubli;
      })
    );
  }
}
