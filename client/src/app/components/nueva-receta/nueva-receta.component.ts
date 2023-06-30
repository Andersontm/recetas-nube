import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { RecetasService } from 'src/app/core/service/recetas.service';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.css']
})
export class NuevaRecetaComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();

  file:any
  myForm!: FormGroup;


  constructor(
    public srvRecetas: RecetasService,
    public fb: FormBuilder
  ) {this.myForm = this.fb.group({
    str_receta_nombre: ['', [Validators.required]],
    str_autor_nombre: ['', [Validators.required]],
    str_autor_telefono: ['', [Validators.required]],
    str_autor_correo: ['', [Validators.required]],
    str_receta_dificultad: ['', [Validators.required]],
    str_receta_image: ['', [Validators.required]],
    str_receta_preparacion: ['', [Validators.required]],
  }); }
 
  ngOnInit(): void {
  }

  send(){
    console.log("form",this.myForm.value)
    this.srvRecetas.postRecetas(this.myForm.value).pipe(takeUntil(this.destroy$))
     .subscribe({
      next:(res) =>{
        console.log('Consume el servicio');
      },
      error:(err)=>{
        console.log('error ->', err);
      }
     }) 

  }

  ngOnDestroy(): void {
      this.destroy$.next(true)
      this.destroy$.unsubscribe()
  }

}
