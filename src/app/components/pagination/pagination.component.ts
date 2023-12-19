import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class PaginationComponent {
  @Input()
  currentPage!: number;

  @Input()
  maxPages!: number;

  @Output()
  readonly previous: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  readonly next: EventEmitter<number> = new EventEmitter<number>();

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
