import {Component, Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {Hero} from '../hero';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // 输入集合在@Component装饰器中
  // inputs: ['major', 'minor'],
  // outputs: ['testBindChange: test-bindChange'],
})
@Directive({
  // 输出列表配置在 @Directive装饰器中
  outputs: ['fromChild: from-child', 'testBindChange: test-bindChange'],  // propertyName:alias
  // inputs: ['major', 'minor']
})
export class TestComponent implements OnInit, OnChanges  {
   @Input() hero: Hero;
   @Input('test-bind') testBind: string;
   @Input() major: any;
   @Input() minor: any;
  // @Input('test-bind') testBind: string;
  @Input() currenttest: Object;
  @Input() currentteststring: string;
  @Output() testfuncpar = new EventEmitter();

  // @Output('test-bindChange') testBindChange = new EventEmitter();
   @Output('test-bindChange') testBindChange = new EventEmitter();
 // @Output() currenttestChange = new EventEmitter();
   @Output() currentteststringChange = new EventEmitter<string>();
  // @Output() fromChild = new EventEmitter();
  // @Output('from.child') fromChild = new EventEmitter();
    @Output() fromChild = new EventEmitter();
  changeLog: string[] = [];
  values: any;
  color = '';
  constructor() {
    this.values = '';
  }
  ngOnInit() {
    console.log(this.testBind, this.major);
    setTimeout(() => {
      console.log('testBind')
      this.testBindChange.emit('asdasdasdasdasdasdasdasdas');
    }, 3000);
    // console.log(this.hero);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    // 检测输入属性变化
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp: any = changes[propName];
      let to: any = JSON.stringify(changedProp.currentValue);
      console.log(changedProp, to);
      if (changedProp.isFirstChange()) {
        // 初始化进入的检测
        //log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
      this.changeLog.push(log.join(', '));
    }
  }
  changeNgmodel(val) {
    this.currentteststringChange.emit(this.currentteststring);
    // console.log(val)
    this.fromChild.emit(val);
  }

  greeting() {
    console.log('greeting');
  }
  callPhone(phone, val) {
    phone.value = 'change';
    console.dir(phone);
    console.log(val);
  }
  testbtn() {
    this.testfuncpar.emit('testemithhhhh');
  }

  onkeyup(e: KeyboardEvent) {
    // KeyboardEvent   Event
    console.log(<HTMLInputElement>event.target, <Document>event.target);
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  update(val: string) {
    this.values += val + ' | ';
  }
}
