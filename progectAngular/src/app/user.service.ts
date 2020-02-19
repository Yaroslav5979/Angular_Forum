import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public topics = [];



////////////////////////////////////////////////////////////
  constructor() { }

  public reloadTopics(chat, id){
    this.topics[id] = chat;
    console.log(chat,id);
    localStorage.setItem('Topics', JSON.stringify(this.topics));
   
  }

  public getChatId(id){
    console.log(id, this.topics);
    if(this.topics.length == 0){
      this.topics = JSON.parse(localStorage.getItem('Topics')) || [];
    }
     return this.topics[id]
     
  }
  
 

  public addTopic(topic){
    this.topics.unshift(topic);
    console.log(this.topics);
   
  }

   
  public getAll(){
    this.topics = JSON.parse(localStorage.getItem('Topics')) || [];
    return this.topics;
  }
}
