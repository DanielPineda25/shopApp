import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'shopApp-search-ref-ean',
  templateUrl: './search-ref-ean.component.html',
  styleUrl: './search-ref-ean.component.css'
})
export class SearchRefEanComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
   ){}

  ngOnInit(): void {
    this.myForm = this.rootFormGroup.control;
  }

}
