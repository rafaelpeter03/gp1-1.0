import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadcolaboradorComponent } from '../CadColaborador/cadcolaborador/cadcolaborador.component';
import { CadfranquiaComponent } from '../CadFranquia/cadfranquia/cadfranquia.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  children:[
    {
      path:  'CadColaborador',
      component: CadcolaboradorComponent
    },
    {
      path: 'CadFranquia',
      component: CadfranquiaComponent
    }] 
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
