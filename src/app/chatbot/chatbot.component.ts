import { Component, OnInit } from '@angular/core';
import { MusicRelease, Track } from '../models/musicrelease.model';

import { OpenaiapiService } from '../shared/openaiapi.service';
import { MusicreleaseService } from '../shared/musicrelease/musicrelease.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userMessage!: string;
  musicReleaseData!: string;
  assistantReply!: string;
  chatMessages: { role: string, content: string }[] = [];
  genresarray: string[]= [];

  musicrelease = new MusicRelease();
  tmptrack = new Track();

  result:string;
  trackarray: Track[]= [];

  constructor(private openAiApiService: OpenaiapiService, private musicreleaseServ: MusicreleaseService){}

  sendMessage() {
    const userMessage = this.userMessage;
    this.chatMessages.push({ role: 'user', content: userMessage });
    this.openAiApiService.sendMessage(this.userMessage)
      .subscribe(response => {
        this.assistantReply = response.reply;
        this.chatMessages.push({ role: 'assistant', content: this.assistantReply });
        this.userMessage = '';
      });
  }

  saveMusicReleaseData() {

              const obj = JSON.parse(this.musicReleaseData);

              this.musicrelease.title = obj.title;
              this.musicrelease.artistid = '12345';
              this.musicrelease.artistname = obj.artist;
              this.musicrelease.shortdescription = obj.description;
              this.musicrelease.type = 'VINYL';
              this.musicrelease.frontcoverimage = '12345';
              this.musicrelease.display = false;

              this.genresarray.push('INDIE');
              this.musicrelease.genres = this.genresarray;

              this.tmptrack.title = 'no tracks available for display';
              this.tmptrack.trackno = '1';
              this.tmptrack.length = '0:00';
              this.trackarray.push(this.tmptrack);
              this.musicrelease.tracks= this.trackarray;

              this.musicrelease.releasedate = '27/11/24';
              this.musicrelease.releaseaddeddate = '27/11/24';
              this.musicrelease.vinylformat = '1 x LP black vinyl';
              this.musicrelease.label = obj.label;
              this.musicrelease.catalogueno = '1';
              this.musicrelease.barcode = obj.barcode;
              this.musicrelease.price = '1';
              this.musicrelease.instock = '1';
              this.musicrelease.releaseyear = obj.year;

              this.musicrelease.pricepaidsterling= '1';
              this.musicrelease.exchangerate= '1';
              this.musicrelease.pricepaideuro= '1';
              this.musicrelease.invoiceno= '1';
              this.musicrelease.datepaid= '1';

              this.musicreleaseServ.save(this.musicrelease)
                                               .subscribe(
                                                   data => {
                                                   if (data) {
                                                        this.result = "successful Create -- musicrelease ";
                                                    }
                                                    window.location.reload();
                                                   },
                                                   error => {
                                                      this.result = "create musicrelease  failed";
                                                   });


    }

}
