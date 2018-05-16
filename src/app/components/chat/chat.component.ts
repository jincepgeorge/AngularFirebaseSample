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
  public chatMessages: Observable<any[]>;
  constructor(private db: AngularFirestore
  
) { }

  ngOnInit() {
    // this.chatMessages = this.db.collection('/chatMessages').valueChanges();
    // this.chatMessages.subscribe(result => {
    //   console.log(result)
    // });
  }
  sendChatMessage(){
    var messageObj={ message: this.message, name: 'jince'};
    //this._chatService.sendMessages(messageObj);
  }

}
