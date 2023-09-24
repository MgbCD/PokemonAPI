import { Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {
  pokemon: any= '';
  pokemonType = [];
  pokemonImg = '';
  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
      this.activatedRouter.params.subscribe(
        params => {
          this.getPokemon(params['id']);
        }
      )
  }
  ngOnInit(): void {
    
  }
  getPokemon(id: number){
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      err =>{
        console.log(err);
      }
    );
  }
}
