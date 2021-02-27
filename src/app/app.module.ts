import { AppPipeModule } from './shared/Component/pipe/pipe.module';
import { StarModule } from './shared/Component/star/star.module';
import { CourseModule } from './courses/course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    CoreModule,
    AppComponent,
    StarModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    AppPipeModule,
    RouterModule.forRoot([  // objeto de rotas

      {// aqui ele vai quando nao tem nada
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
      // foi para a rota do curse module
      // trocando os componet para trabalhar com rotas
     // {
       // path: 'courses', component: CouseListaComponent
      //},

      //{
       // path: 'courses/info/:id', component: CourseInfoComponent
      //},


     // {// a qui ele vai quando nao encontra nada
      //  path: '**', component: Error404Component
      //}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
