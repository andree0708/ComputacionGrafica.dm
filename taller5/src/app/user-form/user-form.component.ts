import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Components
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    TextareaModule,
    FileUploadModule,
    ButtonModule,
    CardModule,
    DividerModule,
    MessageModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  // Datos del formulario
  userData = {
    nombre: '',
    email: '',
    password: '',
    pais: '',
    fechaNacimiento: null as Date | null,
    genero: '',
    archivoCV: null as File | null
  };

  // Opciones para dropdowns
  paises = [
    { label: 'Colombia', value: 'colombia' },
    { label: 'México', value: 'mexico' },
    { label: 'Argentina', value: 'argentina' },
    { label: 'España', value: 'espana' },
    { label: 'Estados Unidos', value: 'usa' }
  ];

  generos = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Femenino', value: 'femenino' },
    { label: 'Otro', value: 'otro' }
  ];

  constructor(private messageService: MessageService) {}

  onSubmit() {
    if (this.validateForm()) {
      this.messageService.add({
        severity: 'success',
        summary: '¡Formulario Enviado!',
        detail: 'Los datos se han guardado correctamente'
      });
      console.log('Datos del usuario:', this.userData);
    }
  }

  validateForm(): boolean {
    if (!this.userData.nombre || !this.userData.email || !this.userData.password) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error de Validación',
        detail: 'Por favor completa todos los campos obligatorios'
      });
      return false;
    }
    return true;
  }

  onFileSelect(event: any) {
    this.userData.archivoCV = event.files[0];
  }

  clearForm() {
    this.userData = {
      nombre: '',
      email: '',
      password: '',
      pais: '',
      fechaNacimiento: null,
      genero: '',
      archivoCV: null
    };
  }
}
