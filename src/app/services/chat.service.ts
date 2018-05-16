import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {

  public chatMessages: Observable<any[]>;
  prodcollection: AngularFirestoreCollection<any> = this.db.collection('chatMessages');
  constructor(private db: AngularFirestore) {


   }
   getChatMessages(){
    this.chatMessages = this.db.collection('/chatMessages').valueChanges();
    return this.chatMessages;
   }
   sendMessages(mesage){
    this.prodcollection.doc(new Date().getTime().toString()).set(mesage)
    .catch((err) => {
    console.log(err);
  })
   }

}
