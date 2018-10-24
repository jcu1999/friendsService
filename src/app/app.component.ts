import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  friends = [];

  constructor(private cryptoservice: CryptoService) {
  }

  ngOnInit() {
    this.friends = this.cryptoservice.getMyFriends();
  }
}
