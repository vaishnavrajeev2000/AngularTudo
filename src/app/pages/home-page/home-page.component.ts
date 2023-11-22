import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  [x:string]: any;
  inputAdd!: string;
  items: any;
 constructor(private api:ApiService){}
  todos:any;
  newTaskTitle:string='';
  ngOnInit(){
    this.api.getTodo().subscribe((data:any) => {
     this.todos=data
    })
  }
  delete(id: any){
    this.todos=this.todos.filter((e : {id:any})=> e.id != id)
  }
  addNewTask(){
    if (this.newTaskTitle.trim() !== ''){
      const newTask = { title: this.newTaskTitle, finished:false};
      this.todos.push(newTask);
      this.newTaskTitle= '';//clear the input field after adding task
    }
  
  }

}