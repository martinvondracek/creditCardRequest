import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators,
  AbstractControl, Control} from 'angular2/common';

import {RequestModel} from '../RequestModel';

import {NewRequestService} from '../new-request.service';

@Component({
  selector: 'personal-details',
  styles: [ require('./personal-details.scss').toString() ],
  template: require('./personal-details.html')
})
export class PersonalDetails implements OnInit {
  model: RequestModel;
  myForm: ControlGroup;
  firstName: AbstractControl;

  constructor(
    private router: Router,
    private newRequestService: NewRequestService,
    fb: FormBuilder
  ) {
    this.myForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        this.emailValidator
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        this.phoneValidator
      ])]
    });
  }

  ngOnInit() {
    this.model = this.newRequestService.getModel();

    // we need status at least 1, otherwise we navigate to first step
    if (this.model.status < 1) {
      this.router.navigate( ['CardTypes']);
    }
  }

  phoneValidator(control: Control) {
    if (!control.value) {
      return {invalidPhone: false};
    }

    if (!control.value.match(/^[+]{0,1}[\d\s]{6,15}$/)) {
      return {invalidPhone: true};
    }
  }

  emailValidator(control: Control) {
    if (!control.value) {
      return {invalidPhone: false};
    }

    if (!control.value.match(/^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {invalidPhone: true};
    }
  }

  back() {
    // save data
    this.newRequestService.saveModel(this.model);

    // go to next page
    this.router.navigate( ['CardTypes']);
  }

  onSubmit(valid: boolean) {
    if (valid) {
      // save data
      this.model.status = 2;
      this.newRequestService.saveModel(this.model);

      // go to next page
      this.router.navigate( ['Confirmation']);
    }
  }

}
