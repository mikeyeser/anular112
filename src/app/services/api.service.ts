import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

getpro(){
  return this.http.get('https://fakestoreapi.com/products')
}

getprodactByid(id : number){
  return this.http.get(`https://fakestoreapi.com/products/${id}`)
}




 // 
}
