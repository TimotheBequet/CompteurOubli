import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Persons } from 'src/app/classes/persons';
import { environment } from 'src/environments/environment';
import { SaisonsService } from 'src/app/services/saisons.service';
import { OublisService } from 'src/app/services/oublis.service';
import confetti from 'canvas-confetti';

@Component({
    selector: 'app-page-classement',
    templateUrl: './page-classement.component.html',
    styleUrls: ['./page-classement.component.scss'],
    standalone: false
})
export class PageClassementComponent implements OnInit, OnChanges {
  lstPersons: Persons[] = [];
  basePath: string = '';
  apiBase: string = environment.apiBase;
  @Input('file') file!: String;
  title: String = '';
  loading: boolean = true;
  selectedPerson: Persons | null = null;
  detailFeatureEnabled: boolean = false;

  private static readonly DETAIL_FEATURE_START_DATE = new Date('2026-09-01');
  private static readonly DETAIL_FEATURE_MIN_SAISON = '2026-2027';

  constructor(private saisonsService: SaisonsService, private oublisService: OublisService) {}

  ngOnInit(): void {
    /*if (environment.name === 'PROD') {
      this.basePath = '/CompteurOubli';
    }*/
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lstPersons = [];
    this.loading = true;
    this.initListePersons();
  }

  initListePersons(): void {
    this.saisonsService.getSaisons().subscribe((saisons) => {
      const saison = this.file === 'current'
        ? saisons.find(s => s.estCourante)
        : saisons.find(s => s.libelle === this.file);

      if (!saison) {
        this.loading = false;
        return;
      }

      this.title = this.file === 'current' ? 'Classement' : `Classement Saison ${saison.libelle.replace('-', '/')}`;

      this.detailFeatureEnabled = new Date() >= PageClassementComponent.DETAIL_FEATURE_START_DATE
        && saison.libelle >= PageClassementComponent.DETAIL_FEATURE_MIN_SAISON;

      this.oublisService.getClassement(saison.id).subscribe((datas) => {
        this.lstPersons = datas.sort((a, b) => b.score - a.score);
        this.loading = false;

        if (this.file !== 'current' && this.lstPersons.length) {
          setTimeout(() => this.celebrate(), 0);
        }
      });
    });
  }

  openDetail(person: Persons): void {
    if (!this.detailFeatureEnabled) {
      return;
    }
    this.selectedPerson = person;
  }

  closeDetail(): void {
    this.selectedPerson = null;
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
