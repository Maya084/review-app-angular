import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  btnDisabled = true;
  minLength = 10;
  commentValue = '';
  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {

  }

  onChangeInput(value: any) {
    this.commentValue = value;
    this.btnDisabled = this.commentValue.trim().length < this.minLength;
  }
}
