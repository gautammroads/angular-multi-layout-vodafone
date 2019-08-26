import { Component, Input, Optional, Host } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent {

  /** Overrides the comment and provides a reset value when changes are cancelled. */
  @Input()
  get value(): string { return this._value; }
  set value(x: string) {
    this.comment = this._value = x;
  }
  private _value = '';

  /** Form model for the input. */
  comment = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed.pipe(filter(val => val == null))
        .subscribe(() => this.comment = this.value || '');
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.comment);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }
}