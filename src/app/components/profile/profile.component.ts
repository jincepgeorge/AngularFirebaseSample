import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
currentUser;
public historyData: Observable<any[]>;
  constructor(private _authService: AuthService,
    private db: AngularFirestore,) { }

  ngOnInit() {
    this.currentUser=this._authService.getCurrentUser();

    this.historyData = this.db.collection('/agent_c_inout',ref => ref.where('agentname', '==', 'Jince')).valueChanges();
    this.historyData.subscribe(result => {
      console.log(result);
    });
  }

}
