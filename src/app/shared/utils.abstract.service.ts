import { Observable } from 'rxjs/Observable';
import { ServiceState } from './main-api.service';

export interface TrackInfo {
    id: string;
    title: string;
    musicReleaseId: string;
    length: string;
}

export interface TrackData {
   id: string;
       title: string;
       musicReleaseId: string;
       length: string;
}

export interface TrackServiceData {

    trackServiceState: ServiceState;
    trackDetails: TrackData;
    }
