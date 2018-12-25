import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MissionService} from '../mission.service';
import {of, Subscription} from 'rxjs';


@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit, OnDestroy {
  @Input() bmission: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionA$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }
  confirm() {
    this.confirmed = true;
    this.missionService.BMission(this.bmission);
  }

  modify() {
    this.missionService.CMission({name: 'fdp'});
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    // 可观察的对象  3个
    let test1 = '1';
    let test2 = '2';
    let test3 = '3';
    let myObservable = of(test1, test2, test3);
   // console.log(myObservable);

    // 观察者对象
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    // console.log(myObserver);
    // 可观察对象订阅 观察者
    myObservable.subscribe(myObserver);
    setTimeout(() => {
      test1 = '9999';
    }, 5000);
  }

}
