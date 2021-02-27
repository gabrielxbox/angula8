import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private CourseUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) {}

  retrievaAll(): Observable<Course[]> {
    return  this.httpClient.get<Course[]>(this.CourseUrl);
  }

  retiveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>( `${this.CourseUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
        return this.httpClient.put<Course>(`${this.CourseUrl}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.CourseUrl}`, course);
    }

  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.CourseUrl}/${id}`);
  }

}
