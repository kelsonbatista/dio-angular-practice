import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { CourseService } from '../services/course.service';

@Component({
  // selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];
  
  _courses: Course[] = [];

  // variavel com underline significa que eu quero que ela fique somente nesse componente
  _filterBy: string = '';

  // ele captura a injecao de dependencia do service criado, para que fique dinamico
  // ele cria uma instancia
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.getAllCourses();
    this.filteredCourses = this._courses;
  }

  // definição do input (entrada) no 2way data bind criado para o filtro (o nome filter foi o mesmo utilizado em course-list.component.html -  o value é o valor do input)
  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => (
      // se for maior que -1 quer dizer se alguma sequencia bater, ele ja vai mostrando/filtrando
      // a resposta estou jogando no filteredCourses
      // esse filtro vai ser injetado na lista do curso em course-list.component.html
      course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
    )
  }
  // definição da leitura (saida - pega o que esta sendo filtrado)
  get filter() {
    return this._filterBy;
  }

}
