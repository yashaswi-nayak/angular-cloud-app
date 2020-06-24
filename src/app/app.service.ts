import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private loggedIn = false;

  checkUser() {
    if (sessionStorage.getItem('key')) {
      let data = AES.decrypt(sessionStorage.getItem('key'), '1234567').toString(enc.Utf8);
      let now = Number(Date.now())
      let stamp = Number(data.split('::')[1]);
      console.log("NOW", now);
      console.log(stamp, data.split('::')[1]);
      if (now - stamp >= (5 * 60 * 1000)) {
        sessionStorage.removeItem('key');
        return false;
      } else {
        this.loggedIn = true;
        return true;
      }
    }
  }
}
