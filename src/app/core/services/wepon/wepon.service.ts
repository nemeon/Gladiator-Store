import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { WeponModule } from '../../models/wepon.module';

@Injectable()
export class WeponService {

  constructor() { }

  takeAllWepons() {
    const Wepons: WeponModule[] = [
      {
        Id: 'Weapon-001',
        Title: 'Roman Sword',
        Description: 'This Weapon is pure steal, made by romans, it fast and balanced.',
   
        ImgSrc: './assets/images/w1.jpg'
      },
      {
        Id: 'Weapon-002',
        Title: 'Galdiator Sword',
        Description: "This gladiator sword is used in most of gladiator battles, be ready to feel its glory.",
        
        ImgSrc: './assets/images/w2.jpg'
      },
      {
        Id: 'Weapon-003',
        Title: 'Roman Commander Sword',
        Description: 'This is fine roman Weapon, made for war, very durable and balanced.  ',
       
        ImgSrc: './assets/images/w3.jpg'
      },
      {
        Id: 'Weapon-004',
        Title: "Great triton weapon",
        Description: "Its massive and can kill enemies with one strike,if u are strong to lift it.",
        
        ImgSrc: './assets/images/w4.jpg'
      }
    ];
    return Wepons;
  }
}
