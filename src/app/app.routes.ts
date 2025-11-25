import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';
//import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'blog', component:Blog},
    {path:'contact', component:Contact},
    {path:'**',redirectTo:''}
];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })
// export class AppRoutingModule{}
