import { Observable } from 'rxjs/Observable';
import { ServiceState } from './main-api.service';

export interface TrackData {
    id: any;
    title: string;
    trackno: string;
    length: string;
}


export interface TrackCollection {
   thetracks: Array<TrackData>;
}


export interface TrackServiceData {

    trackServiceState: ServiceState;
    trackDetails: TrackCollection;


}
