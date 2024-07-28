import { Injectable, effect, signal } from '@angular/core';

type Item = {
  id: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() {}

  logEffect = effect( () => {
    console.log(`signal _count_ in CookiesService has changed: ${this.count()}`)
  });

  syncToLocalStorage = effect( () => {
    localStorage.setItem('packed', JSON.stringify(this._packed()))
  })

  count = signal<number>(0);
  baked = signal<number>(0);
  _packed = signal(JSON.parse(localStorage.getItem('packed')!) as Item[]);

  updateCount() {
    this.count.update((val) => val + 1);
  }

  setCount(val: number) {
    this.count.set(val);
  }

  packed = this._packed.asReadonly();

  cleadPacked() {
    this._packed.set([]);
    this.count.set(0);
    this.baked.set(0);
  }

  addPacked(value: number) {
    this._packed.update( (prev) => [...prev, { id: prev.length+1, count: value}])
    this.count.set(0);
    this.baked.set(0);
  }

}
