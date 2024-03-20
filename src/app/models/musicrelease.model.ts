export class MusicRelease {
    id: any;
    title: string;


     artistid: string;;
     artistname: string;
     shortdescription: string;
     type: string;
     frontcoverimage: string;
     display: boolean;
     genres: string[]= [];
     tracks: Track[]= [];
     releasedate: string;
     releaseaddeddate: string;
     vinylformat: string;
     label: string;
     catalogueno: string;
     barcode: string;
     price: string;
     instock: any;
     releaseyear: string;

}

export class Track {

    id: any;
    title: String;

    trackno: String;
    length: String;

}

export type MusicReleaseInputData = Readonly<{
    supportMessage?: string;
    hostID: string;
}>;
