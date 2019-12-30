import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  chatList = [
    {
      name: 'Bohdan Kononets',
      lastMsg: 'Hi Im sandy hello how r u',
      lastSeen: 'online'
    },
    {
      name: 'Sandeep Deepak',
      lastMsg: 'Im sandy hello how r u',
      lastSeen: '4 min'
    },
    {
      name: 'Aravind Samy',
      lastMsg: 'jay Hoo jay hhoooo',
      lastSeen: '10 min'
    },
    {
      name: 'Bohdan Kononets',
      lastMsg: 'Hi Im sandy hello how r u',
      lastSeen: 'online'
    },
    {
      name: 'Sandeep Deepak',
      lastMsg: 'Im sandy hello how r u',
      lastSeen: '4 min'
    },
    {
      name: 'Aravind Samy',
      lastMsg: 'jay Hoo jay hhoooo',
      lastSeen: '10 min'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
