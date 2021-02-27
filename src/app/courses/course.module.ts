import { AppPipeModule } from './../shared/Component/pipe/pipe.module';


import { RouterModule } from '@angular/router';
import { CouseListaComponent } from './courses-list.component';
import { CourseInfoComponent } from './courses-info.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// criandon segregação de Module é uma forma de separar os impor do curso para nao coloca no escopo global
@NgModule({
  declarations: [
    CourseInfoComponent,
    CouseListaComponent,
    AppPipeModule

  ], imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CouseListaComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])

  ]
})

export class CourseModule {

}
