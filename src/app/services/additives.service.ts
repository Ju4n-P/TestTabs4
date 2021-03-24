import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  // private _list: BehaviorSubject<any> = new BehaviorSubject(null);
  // public list$: Observable<any> = this._list.asObservable();


  constructor(private _http:HttpClient) {

  }

   getAll(): Observable<any[]>{
     return this._http.get<any[]>('http://localhost:3000/additives')
  }



}
