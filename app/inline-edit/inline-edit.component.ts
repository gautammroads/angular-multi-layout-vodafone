import { Component, Input, Optional, Host } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { filter } from 'rxjs/operators/filter';
import { ApprovalService } from '../traineeApproval/approval.service';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent {

  /** Overrides the comment and provides a reset value when changes are cancelled. */
  @Input()
  get value(): any { return this._value; }
  set value(x: any) {


    this.comment = this._value = x;
  }

  @Input()
  get data(): any { return this._uservalue; }
  set data(x: any) {


   this.datauser=this._uservalue = x;
  }
  private _value = '';
  private _uservalue = '';

  /** Form model for the input. */
  comment = '';
  datauser='';


  constructor(@Optional() @Host() public popover: SatPopover,private approvalService:ApprovalService) { }

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed.pipe(filter(val => val == null))
        .subscribe(() =>{ this.comment = this.value || ''});
    }
  }

  onSubmit() {
    if (this.popover) {
this.datauser.comments=this.comment;
    alert(JSON.stringify(this.datauser));
       this.approvalService.rejectTraining(this.datauser)
      .subscribe(message =>console.log("rejected nomination id "+message.id));
      this.popover.close(this.comment);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }
}