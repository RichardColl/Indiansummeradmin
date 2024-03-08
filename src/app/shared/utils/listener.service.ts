import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { View, PageData, ViewData, ViewError } from '../../models/view';
import { TrackServiceData } from '../utils.abstract.service';
import { ServiceState } from '../main-api.service';
import { TrackData } from '../utils.abstract.service';
import { ArtistServiceData } from '../artist.abstract.service';
import { catchError, map, tap} from 'rxjs/operators';

export abstract class AdminListener {
      abstract listen(
        type:AdminType) : Observable<ArtistServiceData>;
}

export enum AdminType {

      HEADER,
      ARTIST_LIST,
      MUSICRELEASE_LIST

}

