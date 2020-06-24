import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AES, enc, Cipher } from 'crypto-js';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SampleFormService {

  encData = undefined;
  user = undefined;

  constructor(private httpCli: HttpClient) { }

  getFact(): Observable<any> {
    return this.httpCli.get('https://uselessfacts.jsph.pl/random.json?language=en');
  }

  likeFact(fact): Observable<any> {
    let url = environment.baseUrlNode + '/user-info/fact';
    let data = {
      'name': this.user,
      'fact': fact
    }
    return this.httpCli.post(url, data);
  }

  getMyFactList(): Observable<any> {
    let url = environment.baseUrlNode + '/' + this.user + '/facts';
    return this.httpCli.get(url);
  }

  rateFact(rating, row): Observable<any> {
    let data = {
      'name': this.user,
      'id': row['_id'],
      'rating': rating
    }
    console.log(data);
    let url = environment.baseUrlFlask + '/user/ratings/update';
    return this.httpCli.post(url, data);
  }

  setUser(user): Observable<any> {
    this.user = user;
    const aesdata = user + "::" + String(Date.now());
    console.log(aesdata);
    this.encData = AES.encrypt(aesdata, '1234567').toString();
    sessionStorage.setItem('key', this.encData);
    let url = environment.baseUrlNode + '/user-info/' + this.user;
    console.log(url);
    return this.httpCli.get(url);
  }

  checkUser() {
    if (sessionStorage.getItem('key')) {
      let data = AES.decrypt(sessionStorage.getItem('key'), '1234567').toString(enc.Utf8);
      this.user = data.split("::")[0]
      return false;
    }
    // console.log(AES.decrypt(sessionStorage.getItem('key'), '1234567').toString(enc.Utf8));
    return true;

  }
}

