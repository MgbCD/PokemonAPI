import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _httpClient: HttpClient) { }

  getAllCharacters() {
    return this._httpClient.get(`${environment.baseUrl}`)
  }

  getCharacter(url: string){
    return this._httpClient.get(url)
  }
}
