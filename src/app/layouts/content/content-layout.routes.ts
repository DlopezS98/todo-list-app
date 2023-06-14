import { Routes } from "@angular/router";

export const CONTENT_LAYOUT_ROUTES: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('../../pages/content-pages.module').then(m => m.default)
  }
]