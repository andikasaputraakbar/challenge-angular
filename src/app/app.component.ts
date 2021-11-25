import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = environment.title;
  number = 1;
  username ='';
  hide = false;
  ngOnInit(): void{
    if(this.username===''){
      this.hide=true;
    }
  }

  test(): void{
    this.username='';
  }

  change(): any {
    this.number++;
  }
}
