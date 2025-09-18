import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ToastModule, MenuModule, UserFormComponent],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller5';

  // Items del menú
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => this.showMessage('Navegando a Inicio')
    },
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      command: () => this.showMessage('Navegando a Perfil')
    },
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
      command: () => this.showMessage('Navegando a Configuración')
    },
    {
      label: 'Ayuda',
      icon: 'pi pi-question-circle',
      command: () => this.showMessage('Navegando a Ayuda')
    }
  ];

  constructor(private messageService: MessageService) {}

  showMessage(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Navegación',
      detail: message
    });
  }
}
