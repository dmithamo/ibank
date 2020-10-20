import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-error',
  templateUrl: './inline-error.component.html',
  styleUrls: ['./inline-error.component.css'],
})
export class InlineErrorComponent implements OnInit {
  @Input() error: string;
  constructor() {}

  ngOnInit(): void {}
}
