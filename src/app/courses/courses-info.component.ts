import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
  templateUrl: './courses-info.component.html'
})

export class CourseInfoComponent  implements OnInit {

  course: Course;

  // pegando as informaçoes das as rotas que estao ativa
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService) {}

  ngOnInit(): void {
    // pegando o a id passado pela a rota e coonvertendo para number
    this.courseService.retiveById(+ this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  Save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('saved with sucess', course),
      error: err => console.log('Error', err)
    });
  }

}
