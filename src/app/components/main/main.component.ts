import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/classes/persons';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  lstPersons: Persons[] = [];
  basePath: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (environment.name === 'PROD') {
      this.basePath = '/CompteurOubli';
    }
    this.initListePersons();
  }

  initListePersons(): void {
    this.http.get<Persons[]>(this.basePath + '/assets/persons.json').subscribe((datas: any) => {
      datas.map((data: any) => this.lstPersons.push(data));
      if (this.lstPersons.length) {
        this.lstPersons.sort(function(a, b) {
          return b.score - a.score;
        });
      }
    });
  }
  
  getClassFromIndex(index: number): string {
    if (index === 0) {
      return "gold";
    } else if (index === 1) {
      return "silver";
    } else if (index === 2) {
      return "bronze";
    } else {
      return "";
    }
  }

  isAffichageMedaille(index: number): boolean {
    return (index >= 0 && index <= 2);
  }

  getUrlMedaille(index: number): string {
    if (index === 0) {
      return this.basePath + "/assets/images/or.png";
    } else if (index === 1) {
      return this.basePath + "/assets/images/argent.png";
    } else if (index === 2) {
      return this.basePath + "/assets/images/bronze.png";
    } else {
      return "";
    }
  }
}
