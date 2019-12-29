import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() maxPages: number;
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();

  disablePrevious() {
    return this.currentPage === 1;
  }

  disableNext() {
    return this.currentPage === this.maxPages;
  }

  onPreviousClick() {
    this.previous.emit(this.currentPage - 1);
  }

  onNextClick() {
    this.next.emit(this.currentPage + 1);
  }
}
