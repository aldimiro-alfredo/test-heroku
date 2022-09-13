import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})

export class ListCoursesComponent implements OnInit {

  public courses: any = []
  private readonly baseUrl: string = environment.baseUrl;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.listOfCourses()
  }

  private listOfCourses() {
    this.http.get(`${this.baseUrl}listagem`)
      .subscribe(res => {
        this.courses = Object(res)
      })
  }

}
