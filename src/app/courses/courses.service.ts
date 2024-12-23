import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

// per rimuovere un service dal file .module e renderlo disponibile in tutta l'app aggiungiamo la proprietà providedIn: "root"
@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    return this.http.get<Course[]>("/api/courses", {
      params: params,
    });
  }

  saveCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders().set("X-Auth", "userId");

    return this.http.put<Course>(`/api/courses/${course.id}`, course, {
      headers: headers,
    });
  }
}
