import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atomic-component',
  templateUrl: './atomic-component.component.html',
  styleUrls: ['./atomic-component.component.css']
})
export class AtomicComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    alert('Hello from atomic component');
  }

}
