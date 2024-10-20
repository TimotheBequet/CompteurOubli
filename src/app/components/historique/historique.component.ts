import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  file: String = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
      this.getHisto();
  }

  getHisto(): void {
    this.file = 'persons' + this.route.snapshot.paramMap.get('number');
  }
}
