import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SampleFormService } from './sample-form.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit, OnChanges {

  user = '';
  displayUser = true;
  display = false;
  displayFact = undefined;
  valid = false;
  constructor(private formSvc: SampleFormService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes === '') {
      this.valid = false;
    } else {
      this.valid = true;
    }
  }

  // selection(event) {
  //   console.log(event);
  //   this.displayFact = this.poem[event.value];
  // }

  getFact() {
    this.formSvc.getPoems().subscribe(data => {
      console.log(data);
      this.display = true;
      this.displayFact = data;
    }, err => {
      console.log(err);
    });
  }

  enterUser() {
    console.log(this.user);
    if (this.valid) {
      this.displayUser = false;
      this.getFact();
    }
  }

}
