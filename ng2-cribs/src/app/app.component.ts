import {Component,AfterViewInit,ElementRef,Inject,ViewChild } from '@angular/core';
import * as $ from 'jquery';
 declare var jQuery: any;
@Component({
  selector: 'app-root',
  template: `
<button type="button" (click)="activaTab('menu2')">test</button>
  <app-modal #modal1>
    <div class="app-modal-header">
      header
	  <button type="button" class="close pull-right" aria-label="Close" (click)="modal1.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="app-modal-body">
      Whatever content you like, form fields, anything
      <input type="text">
    </div>
    <div class="app-modal-footer">
      <button type="button" class="btn btn-default" (click)="modal1.hide()">Close</button>
      <button type="button" class="btn btn-default" (click)="modal2.show()">Show modal 2</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
  
  <app-modal #modal2 >
    <div class="app-modal-header">
      header
    </div>
    <div class="app-modal-body">
      Modal 2
    </div>
    <div class="app-modal-footer">
       <button type="button" class="btn btn-default" (click)="modal2.hide()">Close</button>
      <button type="button" class="btn btn-default" (click)="modal3.show()">Show modal 3</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
  
  <app-modal #modal3>
    <div class="app-modal-header">
      header
    </div>
    <div class="app-modal-body">
      Modal 3
    </div>
    <div class="app-modal-footer">
      <button type="button" class="btn btn-default" (click)="modal3.hide()">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
  <input #input type="text">
  <div class="container">
  <h2>Modal Example</h2>
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
<div class="container">
  <h2>Dynamic Tabs</h2>
  <p>To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>

  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>
</div>
`
})
export class AppComponent implements AfterViewInit{

@ViewChild('input') input: ElementRef;
constructor(private elRef:ElementRef) {}
showMsg(){
	  console.log('testing click');
  }
ngAfterViewInit() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    jQuery(this.input.nativeElement).autocomplete({
      source: availableTags,
	   minLength: 2
    }); 
	this.elRef.nativeElement.querySelector('.nav-tabs a[href="#menu2"]');
    }
	activaTab(tab){
    jQuery(this.elRef.nativeElement.querySelector('.nav-tabs a[href="#'+tab+'"]')).tab('show');
	console.log(this.elRef.nativeElement.querySelector('.nav-tabs a[href="#menu2"]'));
	}
}
