import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-component-lib',
  template: `
    <p>
      ng-component-lib works!
    </p>
  `,
  styles: [
  ]
})
export class NgComponentLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
