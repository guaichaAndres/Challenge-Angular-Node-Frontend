import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path:'',redirectTo: '/auth/login',pathMatch:'full'},

  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)},
  { path: 'menuPrincipal', component: NavigationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
