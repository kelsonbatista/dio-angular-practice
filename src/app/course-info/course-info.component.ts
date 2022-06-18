import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../interfaces/course.interface';
import { CourseService } from '../services/course.service';

@Component({
  // selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  // courseId: number = 0; // altera o retorno para trazer tudo em vez de somente o id
  course: Course | undefined;

  constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    // snapshot pega o momento 
    // a saida é string e o sinal de + é para converter em número 
    // id é o mesmo nome definido na rota /:id

    // linha alterada para fazer a leitura de todos os dados do curso, não somente o id
    this.course = this.courseService.getCourseById(Number(this.activateRoute.snapshot.paramMap.get('id')));
  }

  save(): void {
    if(this.course) {
      this.courseService.saveCourse(this.course);
    }
  }
}
