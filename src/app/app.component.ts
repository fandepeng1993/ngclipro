import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from './hero';
import {ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TestComponent} from './test/test.component';
import {MissionService} from './mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  bmissions = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;

  title: string;
  myHero: string;
  testP: string;
  heroes: Hero[];
  currentobj: Object;
  currentteststring: string;
  testBind: string;
  major: any;
  minor: any;
  @ViewChild('testdom') testdom: ElementRef;  // 获取组件的Dom
  // @ViewChild('appTest') appTest:
  // 父组件中获得子组件的引用
  @ViewChild('appTest') appTest: TestComponent; // 父组件中获得子组件的引用
  @ViewChild('fax') Fax: ElementRef; // 获取组件的Dom
  // @Input() currentteststring: string;
  @Input() testINdata: string;
  // @Output() testfuncpar: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef, private renderer2: Renderer2, private missionService: MissionService) {
    missionService.missionB$.subscribe(amission => {
      // 订阅missionServiceb
      // console.log(amission)
      this.history.push(`${amission} confirmed the mission`);
    });

    this.title = 'titles ngclipro';
    this.myHero = 'heros ngclipro';
    this.currentobj = {
      name: 'currentObj'
    };
    this.currentteststring = 'currentteststring';
    this.heroes = [
      new Hero(1, 'abc'),
      new Hero(2, 'def'),
      new Hero(3, 'ghi'),
      new Hero(4, 'jkl'),
    ];
    this.testP = '<p>你好世界</p>';
    this.major = 1;
    this.minor = 23;

  }
  announce() {
    let mission = this.missions[this.nextMission++];
    // console.log(mission);
    this.missionService.AMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  deleteHero(event: Event, id: string) {
    console.log(event);
  }

  onSubmit(dom: Document, stestdom: Document) {

    this.renderer2.setStyle(this.el.nativeElement.querySelector('.testdom'), 'background', 'green');
    console.dir(this.testdom.nativeElement.getAttribute('sprefix'));
    console.dir(this.testdom.nativeElement);

    console.log(dom, this.el.nativeElement.querySelector('.testdom'), stestdom, '两种方式获取同一个dom');
    setTimeout(() => {
      // this.renderer2.setStyle(this.testdom.nativeElement, 'background', 'red');
      this.renderer2.setStyle(stestdom, 'background', 'red');
    }, 5000);
  }

  ngOnInit() {
    this.testBind = '123123123';
  }

  fatherFun(data, dd) {
   console.log(data, dd);
  }
  watchCom(dom: Document) {
    console.log(123, this.appTest, dom);
    this.appTest.greeting();
  }
  testfunc(a) {
    console.log(a);
  }

  getVal() {
    return 4;
  }
  callFax(dom: Document) {
    // 三种方式获取dom
   console.log(dom, this.Fax.nativeElement, this.el.nativeElement.querySelector('.fax'));
  }
  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
