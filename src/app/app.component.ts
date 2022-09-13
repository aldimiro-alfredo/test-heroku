import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'angular-deploy';

  public courses: any = []
  private readonly baseUrl: string = environment.baseUrl;

  constructor(public http: HttpClient) { }

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
