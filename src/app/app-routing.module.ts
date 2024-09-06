import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './components/historique/historique.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'historique/:number', component: HistoriqueComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
