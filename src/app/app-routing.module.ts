import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './components/historique/historique.component';
import { MainComponent } from './components/main/main.component';
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

}
