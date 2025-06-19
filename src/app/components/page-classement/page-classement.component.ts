import { Component, Input, OnInit } from '@angular/core';
import { Persons } from 'src/app/classes/persons';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import confetti from 'canvas-confetti';

@Component({
    selector: 'app-page-classement',
    templateUrl: './page-classement.component.html',
    styleUrls: ['./page-classement.component.scss'],
    standalone: false
})
export class PageClassementComponent implements OnInit {
  lstPersons: Persons[] = [];
  basePath: string = '';
  @Input('file') file!: String;
  title: String = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (environment.name === 'PROD') {
      this.basePath = 'dist/browser';
    } else {
      this.basePath = '.';
    }
    this.initListePersons();
    if (this.file != 'current') {
      this.celebrate();
    }
  }

  initListePersons(): void {
    this.http.get<Persons[]>(this.basePath + `/assets/${this.file}.json`).subscribe((datas: any) => {
      datas.map((data: any) => this.lstPersons.push(data));
      if (this.lstPersons.length) {
        this.lstPersons.sort(function(a, b) {
          return b.score - a.score;
        });
      }
    });
    if (this.file === 'current') {
      this.title = 'Classement';
    } else if (this.file === '2023-2024') {
      this.title = 'Classement Saison 2023/2024';
    }
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

  celebrate(): void {
    const numberOne = document.getElementById('gold');
    if (numberOne != null && numberOne != undefined) {
      const rect = numberOne?.getBoundingClientRect();
      const left = ((((rect?.left + rect?.right)/2) * 100) / document.body.clientWidth) / 100;
      const top = ((rect?.bottom * 100) / document.body.clientHeight) / 100;
      const duration = 3000;
      confetti({
        particleCount: 200,
        spread: 60,
        origin: {x: left, y: top}
      });
      setTimeout(() => confetti.reset(), duration);
    }
  }
}
