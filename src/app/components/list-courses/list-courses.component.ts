import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  public courses: any = []

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.listOfCourses()
  }

  private listOfCourses() {
    this.http.get('https://adonisdeploy243.herokuapp.com/listagem')
      .subscribe(res => {
        this.courses = Object(res)
      })
  }

}
