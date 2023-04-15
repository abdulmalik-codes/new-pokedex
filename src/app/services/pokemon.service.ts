import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  pokeApi = `/pokeApi`

  constructor(
    private http: HttpClient
  ) { }

  fetchPokemon(offset: number, limit: number) {

    const params = new HttpParams()
      .append('offset', offset)
      .append('limit', limit)

    return this.http.get<any>(this.pokeApi, { params })

  }

}
