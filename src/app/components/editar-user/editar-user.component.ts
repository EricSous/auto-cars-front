import { Component, Input } from '@angular/core';
import { UsuarioEdit } from 'src/app/request/user-edit';
import { CrudClientService } from 'src/app/service/service-client';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css'],
})
export class EditarUserComponent {
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() senha: string = '';
  @Input() login: string = '';

  constructor(private crudClientService: CrudClientService) {}

  update() {
    const user: UsuarioEdit = {
      login: this.login,
      senha: this.senha,
      nome: this.nome,
      email: this.email,
    };

    this.crudClientService.update(user).subscribe(
      () => {
        alert('Usuário atualizado com sucesso!');
      },
      (error) => {
        alert('Erro ao atualizar usuário!');
      }
    );
  }
}
