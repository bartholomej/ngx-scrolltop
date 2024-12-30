import { Component } from '@angular/core';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public title = 'NgxScrollTop demo | Angular go to top button';
  public version = VERSION;
  public iterations = new Array(60);

  public lipsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
    Ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt arcu non sodales neque sodales ut etiam sit. \
    Mi proin sed libero enim sed faucibus. \
    Varius vel pharetra vel turpis nunc eget lorem. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. \
    Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Magna eget est lorem ipsum dolor sit. \
    Tempor orci dapibus ultrices in. Nulla aliquet porttitor lacus luctus accumsan tortor. \
    Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Nibh cras pulvinar mattis nunc sed blandit libero. \
    At ultrices mi tempus imperdiet nulla malesuada pellentesque. Nec feugiat nisl pretium fusce id velit ut tortor. \
    Massa tempor nec feugiat nisl pretium fusce id.';
}
