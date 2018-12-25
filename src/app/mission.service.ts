import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'; // rxjs通讯
@Injectable({providedIn: 'root'})
export class MissionService {
  // 可观察到的字符串资源
  private missionA = new Subject<string>();
  private missionB = new Subject<string>();
  private missionC = new Subject<Object>();

  // 可订阅变量流 可观察到的字符串流
  missionA$ = this.missionA.asObservable();
  missionB$ = this.missionB.asObservable();
  missionC$ = this.missionC.asObservable();

  // 设置变量函数 服务消息命令
  AMission(amission: string) {
    // 设置下个missionA的状态值
    this.missionA.next(amission);
  }

  BMission(bmission: string) {
    // 设置下个missionB的状态值
    this.missionB.next(bmission);
  }

  CMission(cmission: Object) {
    this.missionC.next(cmission);
  }
  constructor() { }
}
