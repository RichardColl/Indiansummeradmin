import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MusicReleaseInputData } from '../models/musicrelease.model';
import { FormBuilder, Validators, FormGroup, FormArray} from '@angular/forms';
import { MusicRelease } from '../models/musicrelease.model';
import { MusicreleaseService } from '../shared/musicrelease/musicrelease.service';

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

  musicReleaseForm: FormGroup;
  result:string;

  constructor(private formBuilder : FormBuilder, private musicreleaseServ: MusicreleaseService) {
      this.musicReleaseForm = this.formBuilder.group( {

          title: [
              null,
              {
                validators: [
                  Validators.required,
                  Validators.maxLength(100)
                ]
              }
          ],
          releaseaddeddate: [new Date()]


        }

      )

   }

  ngOnInit() {

       this.musicReleaseForm = this.formBuilder.group({
            items: this.formBuilder.array([this.createItem()])
          })
  }


  createItem() {
      return this.formBuilder.group({
        track: ['addtrack'],
        length: ['3:09']
      })
    }

  addNext() {
      (this.formBuilder.control['items'] as FormArray).push(this.createItem())
    }

  isFieldInvalid(field: string) {

      return(
          this.musicReleaseForm.get(field).invalid
      );

  }


  get title() {

      return this.musicReleaseForm.get('title');
  }


  onSubmit(musicrelease : MusicRelease): void {

        musicrelease.title = this.musicReleaseForm.value.title;
        musicrelease.artistid = this.musicReleaseForm.value.artistid;
        musicrelease.artistname = this.musicReleaseForm.value.artistname;
        musicrelease.shortdescription = this.musicReleaseForm.value.shortdescription;
        musicrelease.type = this.musicReleaseForm.value.type;
        musicrelease.frontcoverimage = this.musicReleaseForm.value.frontcoverimage;
        musicrelease.display = this.musicReleaseForm.value.display;
        musicrelease.genres = this.musicReleaseForm.value.genres;
        musicrelease.releasedate = this.musicReleaseForm.value.releasedate;
        musicrelease.releaseaddeddate = this.musicReleaseForm.value.releaseaddeddate;
        musicrelease.vinylformat = this.musicReleaseForm.value.vinylformat;
        musicrelease.label = this.musicReleaseForm.value.label;
        musicrelease.catalogueno = this.musicReleaseForm.value.catalogueno;
        musicrelease.barcode = this.musicReleaseForm.value.barcode;
        musicrelease.price = this.musicReleaseForm.value.price;
        musicrelease.instock = this.musicReleaseForm.value.instock;
        musicrelease.releaseyear = this.musicReleaseForm.value.releaseyear;

          this.musicreleaseServ.save(musicrelease)
                                 .subscribe(
                                     data => {
                                     if (data) {
                                          this.result = "successful Create -- musicrelease ";
                                      }

                                     },
                                     error => {
                                        this.result = "create musicrelease  failed";
                                     });


      }

}
