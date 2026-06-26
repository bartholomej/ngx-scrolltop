import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {
  public title = 'NgxScrollTop demo | Angular go to top button';
  public version = VERSION;
  public iterations = new Array(60);

  private readonly router = inject(Router);

  // Current route url, kept as a signal so the OnPush template reacts to it.
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  // The "Custom target" demo scrolls inside a nested container, so the page-level
  // dummy text would only get in the way there.
  protected readonly showDummyText = computed(() => !this.url().includes('target-way'));

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
