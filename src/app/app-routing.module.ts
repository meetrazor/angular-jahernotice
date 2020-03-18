import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  // {
  // path: 'login',
  // data: {
  //   customLayout: true,
  // },
  // children: [
  //    {
  //      path: '',
  //      component: LoginComponent
  //   }
  //   ]
  // },
  {
    path: '',
    redirectTo: 'upload-excel',
    pathMatch: 'full'
  },
  {
    path: 'upload-excel',
    data: {
      title: 'upload-excel'
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
