import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './components/historique/historique.component';
import { MainComponent } from './components/main/main.component';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'historique/:number', component: HistoriqueComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private gtmServices: GoogleTagManagerService, private router: Router) {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
        this.gtmServices.pushTag(gtmTag);
      }
    })
  }
}
