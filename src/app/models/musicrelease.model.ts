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


export type MusicReleaseInputData = Readonly<{
    supportMessage?: string;
    hostID: string;
}>;
