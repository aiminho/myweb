import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  title: string;
  url = 'http://www.google.com';
  showContent = true;
  list = [{ id: 1, desc: 'One' }, { id: 2, desc: 'Two' }, { id: 3, desc: 'Three' }];
  conditionExpression = 'A';
  case1Exp = 'A';

  @Output()
  btnGotoClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onBtnGotoClick() {
    this.btnGotoClick.emit(this.url);
  }

  onToggleClick() {
    this.showContent = !this.showContent;
  }

  onAddList() {
    this.list.push({ id: this.list.length + 1, desc: 'ghost point'});
  }

}
