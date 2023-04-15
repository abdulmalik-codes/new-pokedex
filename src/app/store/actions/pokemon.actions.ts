export namespace PokemonActions {

  export class Fetch {
    public static readonly type = '[Pokemon: Fetch pokemon] Fetch pokemon, set offset and limit'
    constructor(public offset: number, public limit: number) { }
  }

  export class FetchSuccess {
    public static readonly type = '[Pokemon: Fetch success] Fetch pokemon, set offset and limit successfully'
    constructor(public pokemonData: any) { }
  }

  export class FetchFail {
    public static readonly type = '[Pokemon: Fetch fail] Fetch pokemon, set offset and limit failed'
    constructor(public error: any) { }
  }

}
