import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit, OnDestroy {

  text = '';
  sub: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.sub = this.dataService.loadText().subscribe(elo => {
      this.text = elo;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
