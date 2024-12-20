import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
} from "@angular/core";
import { Course } from "src/app/model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../courses.service";
import { NgIf, NgSwitch } from "@angular/common";

// nei componenti standalone vanno importate, in ognuno, tutte le direttive e le dipendenze che il componente utilizza
// ad esempio ngIf ong Switch utilizzate nel template
// per migrare un'app da componenti non standalone a componenti standalone posso runnare il comando ng generate @angular/core:standalone
// un componente standalone DEVE contenere tutte le dependencies che utilizza sia nel template che nel model
@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: true,
  imports: [NgIf, NgSwitch],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
