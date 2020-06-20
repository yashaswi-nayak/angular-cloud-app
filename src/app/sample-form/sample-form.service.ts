import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleFormService {

  constructor(private httpCli: HttpClient) { }

  getPoems(): Observable<any> {
    return this.httpCli.get('https://uselessfacts.jsph.pl/random.json?language=en');
  }
}
