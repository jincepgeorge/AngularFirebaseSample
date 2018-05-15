import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        component: ProfileComponent,
      },
      {
        path:'history',
        component: HomeComponent,
      },
      {
        path:'checkout',
        component: HomeComponent,
      },
      {
        path:'verify/:imagePath',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
