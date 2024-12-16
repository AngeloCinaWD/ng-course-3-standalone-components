import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
  QueryList,
  Self,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { CoursesService } from "./courses/courses.service";
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from "./configurazioniApp";

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}
export const COURSES_SERVICE = new InjectionToken<CoursesService>(
  "COURSES_SERVICE"
);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  coursesDaFile: Course[] = COURSES;

  coursesTotal = this.coursesDaFile.length;

  courses: Course[];

  courses$: Observable<Course[]>;

  coursesService$: Observable<Course[]>;

  constructor(
    private http: HttpClient,
    @Optional() private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private configObject: AppConfig
  ) {
    console.log(configObject);
  }
  ngOnInit() {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    this.http
      .get<Course[]>("/api/courses", { params: params })
      .subscribe((valore) => {
        console.log(valore);
        this.courses = valore;
      });

    this.courses$ = this.http.get<Course[]>("/api/courses", { params: params });

    this.coursesService$ = this.coursesService.loadCourses();
  }

  onCourseChanged(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe((value) => console.log(value.description));
  }

  editCategory() {
    this.coursesDaFile[1].category = "ADVANCED";
  }
}
