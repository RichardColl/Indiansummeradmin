import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MusicReleaseInputData } from '../models/musicrelease.model';

@Component({
  selector: 'app-createmusicrelease',
  templateUrl: './createmusicrelease.component.html',
  styleUrls: ['./createmusicrelease.component.css']
})
export class CreatemusicreleaseComponent implements OnInit {

  @Input()
  inputData: MusicReleaseInputData;

  @Output()
  closeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
