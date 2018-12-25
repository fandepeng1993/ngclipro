import {Injectable} from '@angular/core';
import {HeroJobAdComponent} from './hero-job-ad/hero-job-ad.component';
import {HeroProfileComponent} from './hero-profile/hero-profile.component';
import {AdItem} from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() {
  }

  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'aaaaaaa', bio: 'bbbbbbb'}),
      new AdItem(HeroProfileComponent, {name: 'ccccccc', bio: 'ddddddd'}),
      new AdItem(HeroJobAdComponent, {headline: 'AAAAAAA', body: 'BBBBBBBB'}),
      new AdItem(HeroJobAdComponent, {headline: 'CCCCCCC', body: 'DDDDDDDD'}),
    ];
  }
}
