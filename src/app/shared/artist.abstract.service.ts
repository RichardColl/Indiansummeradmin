import { Observable } from 'rxjs/Observable';
import { ServiceState } from './main-api.service';

export interface ArtistData {
    id: any;
    name: string;
    menuimage: string;
    history: string;
}

export interface ArtistComboData {
    id: any;
    name: string;
    menuimage: string;
    history: string;
    relatedname: string;
    relatedhistory: string;

}

export interface ArtistCollection {
   theartists: Array<ArtistData>;
}

export interface ArtistComboCollection {
   theartistscombo: Array<ArtistComboData>;
}





export interface ArtistServiceData {

    artistServiceState: ServiceState;
    artistDetails: ArtistCollection;
    artistComboDetails:ArtistComboCollection


}
