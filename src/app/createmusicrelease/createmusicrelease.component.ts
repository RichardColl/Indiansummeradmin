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
  musicrelease = new MusicRelease();

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

       //this.musicReleaseForm = this.formBuilder.group({
        //    items: this.formBuilder.array([this.createItem()])
        //  })
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


  onSubmit(): void {
        alert("onSubmitollll");
        alert(this.musicReleaseForm.value.title);
        this.musicrelease.title = this.musicReleaseForm.value.title;
        this.musicrelease.artistid = this.musicReleaseForm.value.artistid;
        this.musicrelease.artistname = this.musicReleaseForm.value.artistname;
        this.musicrelease.shortdescription = this.musicReleaseForm.value.shortdescription;
        this.musicrelease.type = this.musicReleaseForm.value.type;
        this.musicrelease.frontcoverimage = this.musicReleaseForm.value.frontcoverimage;
        this.musicrelease.display = this.musicReleaseForm.value.display;
        this.musicrelease.genres = this.musicReleaseForm.value.genres;
        this.musicrelease.releasedate = this.musicReleaseForm.value.releasedate;
        this.musicrelease.releaseaddeddate = this.musicReleaseForm.value.releaseaddeddate;
        this.musicrelease.vinylformat = this.musicReleaseForm.value.vinylformat;
        this.musicrelease.label = this.musicReleaseForm.value.label;
        this.musicrelease.catalogueno = this.musicReleaseForm.value.catalogueno;
        this.musicrelease.barcode = this.musicReleaseForm.value.barcode;
        this.musicrelease.price = this.musicReleaseForm.value.price;
        this.musicrelease.instock = this.musicReleaseForm.value.instock;
        this.musicrelease.releaseyear = this.musicReleaseForm.value.releaseyear;

          this.musicreleaseServ.save(this.musicrelease)
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
