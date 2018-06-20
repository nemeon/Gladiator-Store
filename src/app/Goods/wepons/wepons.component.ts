import { Component, OnInit } from '@angular/core';
import { WeponService } from '../../core/services/wepon/wepon.service';
import { WeponModule } from '../../core/models/wepon.module';

@Component({
  selector: 'app-wepons',
  templateUrl: './wepons.component.html',
  styleUrls: ['./wepons.component.css']
})
export class WeponsComponent implements OnInit {
  wepon: WeponModule[];
  constructor(private weponService: WeponService) { 
    this.wepon=weponService.takeAllWepons();
  }

  ngOnInit() {
  }

}
