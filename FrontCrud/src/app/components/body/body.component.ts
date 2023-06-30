import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogModifyComponent } from '../dialog-modify/dialog-modify.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  displayedColumns: string[] = ['nroDocumento', 'nombre', 'apellido', 'correoElectronico', 'editar', 'eliminar'];
  personas: Array<Persona>
  formularioPersona: FormGroup;

  constructor( private fb: FormBuilder,
               private personaService: PersonaService,
               public dialog: MatDialog) {
    this.personas = new Array<Persona>();
    this.formularioPersona = fb.group({
      nroDocumento: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.mostrarPersonas();
  }

  //Crear Persona
  crearPersona() {
    if(this.formularioPersona.valid){
      let persona = new Persona();
      persona.nroDocumento = this.formularioPersona.get('nroDocumento')?.value;
      persona.nombre = this.formularioPersona.get('nombre')?.value;
      persona.apellido = this.formularioPersona.get('apellido')?.value;
      persona.correoElectronico = this.formularioPersona.get('correo')?.value;

      console.log("esta es la persona que estamos creando: ", persona);

      this.personaService.crearPersona(persona).subscribe(resp => {
        this.formularioPersona.reset();
        this.mostrarPersonas();
      })
    }
  }

  //Mostrar Personas
  mostrarPersonas(){
    this.personaService.mostrarPersonas().subscribe(resp => {
      console.log("Estas son las personas en la base de datos: ", resp);
      this.personas = resp;
    })
  }

  //Modificar Persona
  modificarPersona(persona: Persona){
    if(persona != null) {
      let personaModificada = new Persona()
      personaModificada.nroDocumento = persona.nroDocumento;
      personaModificada.nombre = persona.nombre;
      personaModificada.apellido = persona.apellido;
      personaModificada.correoElectronico = persona.correoElectronico;
     this.personaService.actualizarPersona(personaModificada).subscribe(resp => {
       this.mostrarPersonas();
     })
    }
  }

  //Eliminar Persona
  eliminarPersona(idPersona: number){
     this.personaService.eliminarPersona(idPersona).subscribe(resp => {
      this.mostrarPersonas();
    })
  }

  openDialogEditar( persona: Persona){
    const dialogRef = this.dialog.open(DialogModifyComponent, {
      data: {
        nroDocumento: persona.nroDocumento,
        nombre: persona.nombre,
        apellido: persona.apellido,
        correoElectronico: persona.correoElectronico
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: `,result);
      this.modificarPersona(result);
    });
  }



}