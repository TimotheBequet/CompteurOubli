import { Component } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
    constructor(private gtmService: GoogleTagManagerService) {}

    trackMe(link: String) {
        const gtmTag = {
            event: `Clic ${link}`,
        };
        this.gtmService.pushTag(gtmTag);
    }
}
