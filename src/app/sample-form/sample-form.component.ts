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
  sectionFact = true;
  valid = false;
  likeLabel = 'Like';
  sectionLabel = 'My List';
  factList = { facts: [] };
  constructor(private formSvc: SampleFormService) { }

  ngOnInit(): void {
    this.displayUser = this.formSvc.checkUser();
    if (!this.displayUser) {
      this.getFact()
    }
  }

  ngOnChanges(changes) {
    if (changes === '') {
      this.valid = false;
    } else {
      this.valid = true;
    }
  }

  getFact() {
    this.formSvc.getFact().subscribe(data => {
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
      this.formSvc.setUser(this.user).subscribe(data => {
        console.log('USER', data);
      }, err => {
        console.log(err);
      });
      this.displayUser = false;
      this.getFact();
    }
  }

  likedFact() {
    this.likeLabel = this.likeLabel === 'Like' ? 'Dislike' : 'Like';
    this.formSvc.likeFact(this.displayFact.text).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  rateFact(rating, row) {
    console.log(rating);
    console.log(row);
    this.formSvc.rateFact(rating, row).subscribe(data => {
      console.log(data);
      this.refreshList();
    }, err => {
      console.log(err);
    })
  }

  refreshList() {
    this.formSvc.getMyFactList().subscribe(data => {
      console.log(data);
      this.factList = data;
    }, err => {
      console.log(err);
    })
  }

  displayList() {
    if (this.sectionFact) {
      this.sectionFact = false;
      this.sectionLabel = 'Fact';
      this.refreshList();
    } else {
      this.sectionFact = true;
      this.sectionLabel = 'My List';
    }
  }
}
