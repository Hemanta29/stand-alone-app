import { Component } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  standalone: true,
  imports:[FooComponent, RouterOutlet]
})
export class AppComponent {
  title = 'stand-alone-app';
}
