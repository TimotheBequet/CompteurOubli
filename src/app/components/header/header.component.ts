import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
    basePath: string = '';
    constructor(private gtmService: GoogleTagManagerService) {}

    ngOnInit(): void {
        if (environment.name === 'PROD') {
            this.basePath = '/CompteurOubli';
        }
    }

    trackMe(link: String) {
        const gtmTag = {
            event: `Clic ${link}`,
        };
        this.gtmService.pushTag(gtmTag);
    }
}
