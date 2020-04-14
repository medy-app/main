import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPageComponent } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPageComponent,
    children: [
      {
        path: 'app-main',
        children: [
          {
            path: '',
            loadChildren: () => import('../medy/views/main/main.module').then((m) => m.MainPageModule),
          },
        ],
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () => import('../medy/views/news/news.module').then((m) => m.NewsPageModule),
          },
        ],
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../medy/views/map/map.module').then((m) => m.MapPageModule),
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../medy/views/settings/settings.module').then((m) => m.SettingsPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/app-main',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/app-main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
