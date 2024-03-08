import { Component, OnInit, Input } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import { ArtistServiceData } from '../shared/artist.abstract.service';

@Component({
  selector: 'app-artistlistsummary',
  templateUrl: './artistlistsummary.component.html',
  styleUrls: ['./artistlistsummary.component.css']
})
export class ArtistlistsummaryComponent implements OnInit {


  @Input()
  data$: Observable<ArtistServiceData>;

  constructor() { }

  ngOnInit() {
  }

}
