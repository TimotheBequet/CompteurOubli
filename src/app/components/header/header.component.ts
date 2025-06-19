import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
    basePath: string = '';
    constructor() {}

    ngOnInit(): void {
        /*if (environment.name === 'PROD') {
            this.basePath = '/browser';
        }*/
    }
}
