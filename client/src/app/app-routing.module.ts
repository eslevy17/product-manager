import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {path: 'view', children: [
        {path: '', pathMatch: 'full', component: ViewComponent},
        {path: 'create', component: CreateComponent},
        {path: 'edit/:id', component: EditComponent},
    ]},
    {path: '', pathMatch: 'full', redirectTo: '/'},
    {path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
