import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopApp-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  //injectamos el formBuilder
  constructor(
    private fb: FormBuilder,
  ){}

  //Crear formulario reactivo con los grupos de inputs
  public myForm: FormGroup = this.fb.group({

    selectStore: this.fb.group({
      selectedOption: [ '', Validators.required ]
    }),
    userDocument: this.fb.group({
      document: [ '', Validators.required ]
    }),
    searchByRefOrEan: this.fb.group({
      selectedSearchBy: [ '', Validators.required ],
      searchByRef:       [ '', Validators.required ],
      searchByEan:       [ '', Validators.required ]
    }),

  });

  onSubmit(){
    //console.log( 'Formulario enviado', this.myForm.value )
    // console.log(this.myForm.get('selectStore')!.get('selectedOption')!.value)
    // console.log(this.myForm.get('userDocument')!.get('document')!.value);
    // console.log(this.myForm.get('searchByRefOrEan')!.get('selectedSearchBy')!.value);
    // console.log(this.myForm.get('searchByRefOrEan')!.get('searchByEan')!.value);
  }

}
