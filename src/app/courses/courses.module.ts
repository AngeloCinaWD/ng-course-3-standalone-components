import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { CoursesService } from "./courses.service";
import { FilterByCategoryPipe } from "./filter-by-category.pipe";

// tutto quello che è dichiarato standalone va tolto dal file .module
// nelle declarations e negli exports
@NgModule({
  declarations: [
    // CourseCardComponent,
    // CourseImageComponent,
    // HighlightedDirective,
    // NgxUnlessDirective,
    // FilterByCategoryPipe,
  ],
  // posso rimuovere anche questo CommonModule perchè tutte le direttive di cui hanno bisogno i componenti sono importate direttamente nei componenti stessi
  // imports: [CommonModule],
  imports: [],
  exports: [
    // CourseCardComponent,
    // CourseImageComponent,
    // HighlightedDirective,
    // NgxUnlessDirective,
    // FilterByCategoryPipe,
  ],
  // providers: [CoursesService],
  providers: [],
})
export class CoursesModule {}
