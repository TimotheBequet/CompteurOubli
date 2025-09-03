import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-historique',
    templateUrl: './historique.component.html',
    styleUrls: ['./historique.component.scss'],
    standalone: false
})
export class HistoriqueComponent implements DoCheck {
  file: String = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngDoCheck(): void {
    this.getHisto();
  }

  getHisto(): void {
    this.file = this.route.snapshot.paramMap.get('number')!;
  }
}
