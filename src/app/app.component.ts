import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  afterloading : boolean = false;

  title = 'jnj';

  ngAfterViewInit() {
    
  }

  ngOnInit() {
    this.afterloading = true;
  }
}
