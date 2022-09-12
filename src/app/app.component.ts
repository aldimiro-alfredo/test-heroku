import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-deploy';

  public courses: any = []

  constructor(private http: HttpClient) {
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
