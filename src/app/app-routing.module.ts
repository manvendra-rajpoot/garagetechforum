import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ForumsComponent } from './forums/forums.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  }, 
  {
    path: "home", 
    component: HomeComponent
  }, 
  {
    path: "blog", 
    component: BlogComponent
  }, 
  {
    path: "contact", 
    component: ContactComponent
  }, 
  {
    path: "forums", 
    component: ForumsComponent
  }, 
  {
    path: "**", 
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
