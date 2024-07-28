import { Component, effect, inject } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pack',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.css'
})
export class PackComponent {

  transfer = inject(CookiesService);

  constructor() {
    effect( () => {
      console.log("signal in Pack has changed")
    })
  }

  send() {
    this.transfer.updateCount();
  }

}
