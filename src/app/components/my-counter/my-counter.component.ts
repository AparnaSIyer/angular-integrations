import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private apniDukaan: Store<{count: number}>){
    this.count$ = apniDukaan.select('count');
  }

  increment(){
    //TODO
    this.apniDukaan.dispatch(increment());
  }

  decrement(){
    this.apniDukaan.dispatch(decrement());
  }

  reset(){
    this.apniDukaan.dispatch(reset());
  }
}
