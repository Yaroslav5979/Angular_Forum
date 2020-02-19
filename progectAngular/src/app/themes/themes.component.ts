import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';



interface coment {
  removeTopic:boolean,
  coments:string[]
}

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
   


  topic: coment[]=[];
  removeTopic:boolean=true;

  public indexChat=[];

  public users;


  public testMas;




  constructor(private userService: UserService ) {}
  

   
  ngOnInit() {  
    this.users = this.userService.getAll();

    console.log(this.users)
  }
  
                                 // Добавляєм в тему
  addThems(textThemes){
   
    let topic = {
      name:textThemes,
      topicChat: []
    }

     if(textThemes == ''){
       alert('Give the title a topic')
       return false
     }
     
     this.userService.addTopic(topic);
     return false;
  }
                                 // Видаляєм тему
  remove(topi){
    console.log(topi)
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].name == topi){
        this.users.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('Topics', JSON.stringify(this.users));
  }
  



  

}
