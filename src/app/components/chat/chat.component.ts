import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message;
  loggedUserName
  public chatMessages: Observable<any[]>;
  chatMessagesArrayLength:any;
  constructor(private db: AngularFirestore,
    private _authService: AuthService,
    private _chatService: ChatService
  
) { }

  ngOnInit() {
    this.chatMessages = this.db.collection('/chatMessages').valueChanges();
    this.chatMessages.subscribe(result => {
      console.log(result);
      this.chatMessagesArrayLength=result.length;
    });
    this.loggedUserName=this._authService.getCurrentUser().displayName
  }
  sendChatMessage(){
    var messageObj={ message: this.message, 
      name: this._authService.getCurrentUser().displayName,
    sendTime:new Date()};
    this._chatService.sendMessages(messageObj);
    this.message="";
  }

}
