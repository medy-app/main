import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './pages/sign-in/sign-in.module#SignInModule'},
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
  { path: 'list-news', loadChildren: './pages/list-of-news/list-of-news.module#ListOfNewsModule'},
  { path: 'list-advice', loadChildren: './pages/list-of-advice/list-of-advice.module#ListOfAdviceModule'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
