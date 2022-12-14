import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, Validators } from '@angular/forms';
import { minCharsValidator } from '../../util/validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  btnDisabled = true;
  minLength = 10;
  rating = 10;

  formFeedback = new FormControl('', [Validators.required, minCharsValidator(this.minLength)]);

  constructor(
    private service: FeedbackService,
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.formFeedback.invalid) {
      return;
    }

    const newFeedback = {
      id: uuidv4(),
      comment: this.formFeedback.value,
      rating: this.rating
    };

    this.service.add(newFeedback);
    this.formFeedback.patchValue('');
  }

  getRating(ratingValue: any): void {
    this.rating = ratingValue;
  }
}
