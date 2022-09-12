import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-deploy';

  public courses: any = []

  constructor() {
    //this.listOfCourses()
  }

  /*
  private listOfCourses() {
    this.http.get('https://adonisdeploy243.herokuapp.com/listagem')
      .subscribe(res => {
        this.courses = Object(res)
      })
  }*/
}
