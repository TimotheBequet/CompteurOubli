import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './components/historique/historique.component';
import { MainComponent } from './components/main/main.component';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ReglementComponent } from './components/reglement/reglement.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'historique/:number', component: HistoriqueComponent},
  {path: 'reglement', component: ReglementComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
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
