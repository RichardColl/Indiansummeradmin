import { Observable } from 'rxjs/Observable';
import { ServiceState } from './main-api.service';

export interface ArtistData {
    id: any;
    name: string;
    menuimage: string;
    history: string;
}

export interface ArtistServiceData {

    artistServiceState: ServiceState;
    artistDetails: ArtistData;



}
