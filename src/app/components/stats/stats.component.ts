import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  count!: number;
  average!: number;
  subc!: Subscription;

  constructor(
    private feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.subc = this.feedbackService.feedback$.subscribe(
      data => {
        this.count = data.length;
        this.average = data.reduce((a, { rating }) => a + rating, 0) / data.length;
      }
    )
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
