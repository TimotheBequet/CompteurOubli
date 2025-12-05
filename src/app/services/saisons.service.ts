import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaisonsService {

  base = 'https://compteur-oublis.timothe-bequet.fr/api';

  constructor(private httpClient: HttpClient) {}

  getSaisons() {
    return this.httpClient.get<number[]>(`${this.base}/saisons`);
  }
}
