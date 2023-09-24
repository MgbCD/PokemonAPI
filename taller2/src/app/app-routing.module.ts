import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
const routes: Routes = [
  {path:'pokemons', component: CharactersComponent},
  {path:'pokemonsDetail/:id', component: CharacterDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'pokemons'},
  {path: '**', pathMatch: 'full', redirectTo: 'pokemons'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
