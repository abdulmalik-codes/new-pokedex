import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { log } from 'console';
import { Observable } from 'rxjs';
import { PokemonActions } from 'src/app/store/actions/pokemon.actions';
import { PokemonState } from 'src/app/store/state/pokemon.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // doorOpen: boolean = false
  // doorClose: boolean = true

  doorOpen: boolean = true
  doorClose: boolean = false

  private rump: any
  private salsaToppings: any | string
  private tomatoToppings: any | string
  private mushroomsToppings: any | string

  @Select(PokemonState.pokemonData) pokemonData$!: Observable<any>

  pokemonData = this.store.select(PokemonState.pokemonData)

  constructor(
    private store: Store
  ) {

    this.pokemonData.subscribe((x) => {
      // console.log(x);

    })


  }

  ngOnInit(): void {
    // this.getInfo(500, 10)
    // this.getInfo(900, 15)

    // this.calCost('large', ['this.salsaToppings', 'this.tomatoToppings', 'this.mushroomsToppings'])
    // this.calCost('medium', ['this.tomatoToppings', 'this.mushroomsToppings'])
    // this.calCost('large', ['this.mushroomsToppings'])
    // this.calCost('small', ['this.mushroomsToppings'])
    this.calCost('large', [{ salsa: 1, tomato: 1, mushrooms: 2 }])

  }

  openDoor() {
    this.doorOpen = !this.doorOpen
  }

  add(...numbers: number[]) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) sum += numbers[i]
    return sum
  }

  fetchPokemonData() {
    this.store.dispatch(new PokemonActions.Fetch(0, 10))
  }

  fetchPokemonData2() {
    this.store.dispatch(new PokemonActions.Fetch(10, 10))
  }

  fetchPokemonData3() {
    this.store.dispatch(new PokemonActions.Fetch(20, 10))
  }

  calCost(rump: string, toppings: any) {

    let cost = 0
    let toppingCost = 0

    const mushrooms = toppings[0].mushrooms
    const salsa = toppings[0].salsa
    const tomato = toppings[0].tomato

    const totalToppings = mushrooms + salsa + tomato

    if (rump === 'large') {
      toppingCost = totalToppings * 30
      cost = 200 + toppingCost
    }

    if (rump === 'medium') {
      toppingCost = totalToppings * 20
      cost = 150 + toppingCost
    }

    if (rump === 'small') {
      toppingCost = totalToppings * 15
      cost = 120 + toppingCost
    }
    console.log(cost);
    return cost
  }

  getInfo(salary: number, hours: number) {

    this.addSal(salary)
    this.addWork(hours, salary)

  }

  addSal(salary: number) {
    if (salary < 600) return console.log("salary >>>>", salary + 200);

  }
  addWork(hours: number, salary: number) {

    if (hours > 6) {
      return console.log('work >>>>>>>>', salary + 100);

    }
  }

}



// export class Employee {
//   constructor(){
//    console.log('');
//   }

//   getInfo(salary?, hours?){
//     return salary && hours
//   }

//   addSal(salary){
//    //  const info = this.getInfo(salary)
//    //  if(info < 600){
//     if(salary < 600){
//       return salary + 200
//     }
//   }



//   addWork(hours){
//     const info = this.getInfo(salary,hours)

//     if(info < 600){
//       return salary + 100
//     }
//   }

//  }


// }
export interface iToppings { salsa: number, tomato: number, mushrooms: number }

export class GrilledRumpSteak {
  private rump
  private salsaToppings
  private tomatoToppings
  private mushroomsToppings

  constructor() {
    this.rump = ''
    this.salsaToppings = 0
    this.tomatoToppings = 0
    this.mushroomsToppings = 0

    this.calCost('large', [{ salsa: 1, tomato: 1, mushrooms: 2 }])

  }

  calCost(rump: string, toppings: iToppings[]) {
    let cost = 0
    let toppingCost = 0

    const mushrooms = toppings[0].mushrooms
    const salsa = toppings[0].salsa
    const tomato = toppings[0].tomato

    const totalToppings = mushrooms + salsa + tomato

    if (rump === 'large') {
      toppingCost = totalToppings * 30
      cost = 200 + toppingCost
    }

    if (rump === 'medium') {
      toppingCost = totalToppings * 20
      cost = 150 + toppingCost
    }

    if (rump === 'small') {
      toppingCost = totalToppings * 15
      cost = 120 + toppingCost
    }
    console.log(cost);
    return cost
  }
}
