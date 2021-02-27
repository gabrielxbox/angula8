import { CourseService } from './course.service';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
 // selector: 'app-course-list',  foi trocado por rota
  templateUrl: './courses-list.component.html'
})

export class CouseListaComponent implements OnInit {
// as variaveis nao as variaveis intocaveis com  sem _

  filteredCouses: Course[] =  [];

  _courses: Course[] =  [];

  _filterBy: string;
   constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {

    this.courseService.retrievaAll().subscribe({
       next: courses => {
         this._courses = courses;
         this.filteredCouses = this._courses;
       },
       error: err => console.log('Error', err)

    });


  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.pesquisar();
      },
      error: err => console.log('Error', err)

    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCouses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)

  }

  get filter() {
    return this._filterBy;
  }

}
