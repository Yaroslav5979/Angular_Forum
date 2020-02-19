import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { UserService } from '../user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

 

  @Input()public parentData;

  public chat;

  public id;

  public date = new Date();

  public chatId;

  logoHide:boolean=true;

  @HostBinding('style.color') myColor: string;
   
  answer:boolean = false;
  

  constructor(private userService: UserService,private activatedRoute: ActivatedRoute) { 
      
  }
  ngOnInit() {

  


    this.chatId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.chatId)
    this.getChat(this.chatId);
    
    console.log('chat '+ this.chatId);

  }

                        ////Видалити повідомлення
  delChatItem(i){
    this.chat.topicChat = this.chat.topicChat.filter((chat, index)=>{
      return i != index
    });
   this.userService.reloadTopics(this.chat,i)
  }
  

  getChat(chatID){

    this.chat = this.userService.getChatId(chatID);
    console.log(this.chat)
  }
                          ////Відправити повідомлення
  sendComent(comentText,comentName){
    let newChat = {chatMasseg:comentText,userName:comentName, chatDate:new Date()};
  
    let coment = document.getElementById('coment')
   
    
    console.log(comentName,comentText)
    if(comentText.trim()  == '' || comentName.trim() == ''){
    
      alert('Fill in the fields')
      
      return false
    }
    
    this.chat.topicChat.unshift(newChat);
    this.userService.reloadTopics(this.chat, this.chatId);
  }

  Show(){
     this.answer = true
  }
  // nameUser(comentName){
  //    this.masUserName.unshift(comentName);
  //    localStorage.setItem('nameChat', JSON.stringify(this.masUserName));
  //    this.logoHide = !this.logoHide;
  //   //  if(comentName == ''){
  //   //   this.logoHide = !this.logoHide;
  //   //  }
  //   //  else{
  //   //    this.logoHide = true
  //   //  }
     
  // }



  
}
