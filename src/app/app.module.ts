import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ReplacePipe } from './pipes/repalce.pipe';
import { RatingsComponent } from './ratings/ratings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseInfoComponent } from './course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    RatingsComponent,
    ReplacePipe,
    NavbarComponent,
    NotFoundComponent,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'courses', component: CourseListComponent
        // ao entrar na rota courses, abre direto o componente Course List
        // como esta utilizando rotas, pode tirar o selector de course-list.component.ts e tirar a tag de app.component
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'  // ao entrar na rota raiz redireciona para courses
      },
      {
        path: '**', component: NotFoundComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
