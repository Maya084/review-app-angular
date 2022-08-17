import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-select',
  templateUrl: './rating-select.component.html',
  styleUrls: ['./rating-select.component.css']
})
export class RatingSelectComponent implements OnInit {

  radioButtonValues: any[] = [];
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.radioButtonValues = [
        ...this.radioButtonValues,
        {
          id: `num${i}`,
          value: i,
        },
      ];
    }
  }

  onChange(event: any) {
    this.selected.emit(+event.target.value);
  };

}
