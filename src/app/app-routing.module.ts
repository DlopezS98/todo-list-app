import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { CONTENT_LAYOUT_ROUTES } from './layouts/content/content-layout.routes';

const routes: Routes = [
  { path: '', redirectTo: '/pages/subscriptions', pathMatch: 'full' },
  { path: '', component: ContentLayoutComponent, children: CONTENT_LAYOUT_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
