import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../model/course";

@Pipe({
  name: "filterByCategory",
  pure: false,
  standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: Course[], category: string) {
    let newArrayCourses: Course[] = [];

    courses.forEach((course) => {
      newArrayCourses.push({
        ...course,
        description: course.description.toUpperCase(),
      });
    });

    return newArrayCourses.filter((course) => course.category === category);
  }
}
