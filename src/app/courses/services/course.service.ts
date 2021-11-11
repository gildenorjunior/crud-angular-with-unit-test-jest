import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';
import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly API = '/assets/course.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //PARA FINALIZAR O SUBSCRIBE
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
