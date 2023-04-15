import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonActions } from '../actions/pokemon.actions';

interface PokemonStateInterface {
  pokemonData: any
}

function getDefaults() {
  return {
    pokemonData: null
  }
}

@State<PokemonStateInterface>({
  name: 'Pokemon',
  defaults: getDefaults()
})
@Injectable()
export class PokemonState {

  @Selector()
  static pokemonData(state: PokemonStateInterface) {
    return state.pokemonData
  }

  constructor(private pokemonService: PokemonService) { }

  @Action(PokemonActions.Fetch)
  fetchPokemon(ctx: StateContext<PokemonStateInterface>, action: PokemonActions.Fetch) {

    const { limit, offset } = action;

    return this.pokemonService.fetchPokemon(offset, limit)
      .pipe(
        tap({
          next: (response) => {
            // console.log(response);

            ctx.dispatch(new PokemonActions.FetchSuccess(response))
          },
          error: (error) => {
            ctx.dispatch(new PokemonActions.FetchFail(error))
          }
        })
      )

  }
  @Action(PokemonActions.FetchSuccess)
  fetchPokemonSuccess(ctx: StateContext<PokemonStateInterface>, action: PokemonActions.FetchSuccess) {
    const { pokemonData } = action;

    ctx.patchState({ pokemonData });

  }


}
