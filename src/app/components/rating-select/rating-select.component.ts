import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-select',
  templateUrl: './rating-select.component.html',
  styleUrls: ['./rating-select.component.css']
})
export class RatingSelectComponent implements OnInit {

  radioButtonValues: any[] = [];
  selected = 10;

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
    // dispatch("rating-select", e.currentTarget.value);
  };

}
