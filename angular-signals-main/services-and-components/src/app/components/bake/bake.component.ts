import { Component, effect, inject } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-bake',
  standalone: true,
  imports: [],
  templateUrl: './bake.component.html',
  styleUrl: './bake.component.css'
})
export class BakeComponent {

  transfer = inject(CookiesService);

  constructor() {
    effect( () => {
      console.log("signal in Bake has changed")
    })
  }

  bake() {
    this.transfer.baked.set(this.transfer.baked()+this.transfer.count());
  }


}
