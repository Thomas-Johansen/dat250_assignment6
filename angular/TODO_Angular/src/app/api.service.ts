import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://127.0.0.1:8080'
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any>(`${this.apiURL}/todos`)
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/todos/${id}`)
  }

  createPost(summary:string, description:string){
    return this.http.post(`${this.apiURL}/todos`, {"id": 0, "description": description, "summary": summary})
  }
}
