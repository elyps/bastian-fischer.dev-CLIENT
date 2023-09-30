import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddArticleComponent} from "./components/add-article/add-article.component";
import {ArticlesListComponent} from "./components/articles-list/articles-list.component";
import {ArticleDetailsComponent} from "./components/article-details/article-details.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {BoardModeratorComponent} from "./components/board-moderator/board-moderator.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {EditArticleComponent} from "./components/edit-article/edit-article.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {TagsComponent} from "./components/tags/tags.component";
import {CommentComponent} from "./components/comment/comment.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CvComponent} from "./components/cv/cv.component";
import {RecruiterComponent} from "./components/recruiter/recruiter.component";
import {RecruiterDashboardComponent} from "./components/recruiter-dashboard/recruiter-dashboard.component";
import { CertsComponent } from './components/certs/certs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'articles/:id/edit', component: EditArticleComponent },
  { path: 'add', component: AddArticleComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'articles/tags/all', component: TagsComponent },
  { path: 'articles/:id/comments', component: CommentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recruiter', component: RecruiterComponent },
  { path: 'recruiter/dashboard', component: RecruiterDashboardComponent },
  { path: 'recruiter/dashboard/cv', component: CvComponent },
  { path: 'recruiter/dashboard/certs', component: CertsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
