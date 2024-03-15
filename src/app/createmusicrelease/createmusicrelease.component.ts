import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MusicReleaseInputData } from '../models/musicrelease.model';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MusicRelease } from '../models/musicrelease.model';

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

  constructor(private formBuilder : FormBuilder) {
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
  }

  isFieldInvalid(field: string) {

      return(
          this.musicReleaseForm.get(field).invalid
      );

  }


  get title() {

      return this.musicReleaseForm.get('title');
  }


  onSubmit(){


        alert('saving');
        alert(this.musicReleaseForm.value.title);

      }

}
