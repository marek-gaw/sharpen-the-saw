import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BakeComponent } from './components/bake/bake.component';
import { PackComponent } from './components/pack/pack.component';
import { CookiesService } from './services/cookies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BakeComponent, PackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private cookiesService: CookiesService) {
    effect( () => {
      console.log(`signal _count_ in AppComponent has changed: ${this.cookiesService.count()}`)
    })
  }
  

  butter = computed(() => this.cookiesService.count() * 0.1);
  sugar = computed(() => this.cookiesService.count() * 0.05);
  flour = computed(() => this.cookiesService.count() * 0.2);

  counter = computed( () => this.cookiesService.count());

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookiesService.setCount(parseInt(input.value));
  }

}
