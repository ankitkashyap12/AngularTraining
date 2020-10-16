import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CibilScore } from './cibil-score';

@Injectable({
  providedIn: 'root'
})
export class CibilscoreService {

  //injecting HttpClient service to the constructor
  //same as writing this.client=httpClient
  constructor(private client: HttpClient ) { }
  url="http://localhost:3000/scores"

  findAll(): Observable<CibilScore[]>{
    return this.client.get<CibilScore[]>(this.url);


  }
}
 