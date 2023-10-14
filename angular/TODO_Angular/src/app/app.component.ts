import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO_Angular';
  todos : any[] = []
  description: any;
  summary: any;
  constructor(private todo:ApiService) {
    this.todo.getPosts().subscribe(data=>{
      console.warn(data)
      this.todos = data
    })
  }
  public refreshTodos(){
    this.todo.getPosts().subscribe(data=>{
      this.todos = data
    })
  }
  public deleteTodo(id: number){
    this.todo.deletePost(id).subscribe(data=>{
      console.log(data)
      this.refreshTodos()
    })
  }

  public createTodo(){
    this.todo.createPost(this.summary,this.description).subscribe(data=>{
      console.log(data)
      this.refreshTodos()
    })
  }
}
