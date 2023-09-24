import { Component, OnInit, ViewChild } from '@angular/core';


import { PokemonService } from 'src/app/services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {


  displayedColumns: String[] = ['position', 'image', 'name'];
  data: any[] = [];
  datasource = new MatTableDataSource<any>(this.data);
  pokemon = [];
  @ViewChild(MatPaginator, { static: true })
  paginator: any=MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router){}

    ngOnInit(): void {
      this.getPokemons();
    }

    getPokemons(){
      for(let i = 1; i <=150; i++){
        this.pokeService.getPokemons(i).subscribe(
          res => {
            const pokemonData ={
              position: i,
              image: res.sprites.front_default,
              name: res.name
              
            };
            this.data.push(pokemonData);
            this.datasource = new MatTableDataSource<any>(this.data);
            this.datasource.paginator = this.paginator;

            
          },
          err=>{
            console.log(err);
          }
        );
      }
     
    }
 
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.datasource.filter = filterValue.trim().toLowerCase();
    }
    
    getRow(row: { position: any; }){
      this.router.navigateByUrl(`pokemonsDetail/${row.position}`);
    }
  
  }

 


