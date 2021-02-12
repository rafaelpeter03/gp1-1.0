import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  { path: '', loadChildren:() => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
