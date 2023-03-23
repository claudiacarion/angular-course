import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseView() {
    console.log("Course viewed");

    this.courseEmitter.emit(this.course);
  }

}
