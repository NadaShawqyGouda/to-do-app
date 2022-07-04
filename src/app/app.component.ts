import { Component , Input} from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todoApp';


  tasks:any[] = [

  ]


  deleteItem(id:number){
    this.tasks = this.tasks.filter(task=> task.id!==id)
  }

  addItem(item:string){
    if(item){
      this.tasks.push({id:UUID.UUID(),title:item,finished:false})
    }
  }


  changeStatus(task:any){
    task.completed = !task.completed
  }

}




