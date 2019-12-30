import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPageRoutingModule } from './chat-page-routing.module';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MatButtonModule, MatIconModule, MatDividerModule } from '@angular/material';


@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    CommonModule,
    ChatPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class ChatPageModule { }
