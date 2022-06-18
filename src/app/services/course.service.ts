import { Injectable } from "@angular/core";
import { Course } from "../interfaces/course.interface";

// dessa forma eu torno a classe elegivel para injeção de dependencia
// e estando elegivel, eu injeto depois em course-list.component.ts
// o providedIn fala para ser carregado no root da aplicação
@Injectable({
  providedIn: 'root',
})

export class CourseService {
  // criação de um método que vai trazer todos os cursos cadastrados
  getAllCourses(): Course[] {
    return COURSES;
  }

  getCourseById(id: number): Course | undefined {
    // filtrar o array e buscar pelo id
    return COURSES.find((course: Course) => course.id === id)
  }

  saveCourse(course: Course): void {
    // console.log(course.id, course.name, 'save courseeeeeeeee');
    if (course.id) {
      // retorna o index correspondente no array
      const index = COURSES.findIndex((courseDB: Course) => courseDB.id === course.id);
      COURSES[index] = course; // atualiza o campo
    }
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Curso de Angular',
    imageUrl: '/assets/images/angular.png',
    price: 99,
    code: 'XPS-0044',
    duration: 120,
    rating: 4.5,
    releaseDate: 'December, 4, 2020',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.`
  },
  {
    id: 2,
    name: 'Curso de React',
    imageUrl: '/assets/images/react.png',
    price: 110,
    code: 'XML-01224',
    duration: 90,
    rating: 3.7,
    releaseDate: 'December, 8, 2020',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.`
  },
  {
    id: 3,
    name: 'Curso de Javascript',
    imageUrl: '/assets/images/javascript.png',
    price: 120,
    code: 'XML-01222',
    duration: 100,
    rating: 4.1,
    releaseDate: 'December, 12, 2020',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.`
  },
  {
    id: 4,
    name: 'Curso de HTML',
    imageUrl: '/assets/images/html.png',
    price: 80,
    code: 'XML-01223',
    duration: 60,
    rating: 3.2,
    releaseDate: 'December, 12, 2020',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.`
  },
  {
    id: 5,
    name: 'Curso de CSS',
    imageUrl: '/assets/images/css.png',
    price: 150,
    code: 'XML-01225',
    duration: 130,
    rating: 4.8,
    releaseDate: 'December, 11, 2020',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.`
  }
]
