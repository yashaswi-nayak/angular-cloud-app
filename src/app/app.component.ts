import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SampleFormService } from './sample-form/sample-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cloud-test-app';

  constructor(private appSvc: AppService, private dataSvc: SampleFormService) { }

  ngOnInit() { }
}
