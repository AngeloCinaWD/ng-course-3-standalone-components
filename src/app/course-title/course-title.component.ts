import { Component } from "@angular/core";

// per rendere un componente standalone aggiungiamo la property standalone: true
// lo faccimo in tutto: componenti, direttive, pipe etc
@Component({
  selector: "course-title",
  imports: [],
  templateUrl: "./course-title.component.html",
  styleUrl: "./course-title.component.css",
  standalone: true,
})
export class CourseTitleComponent {}
