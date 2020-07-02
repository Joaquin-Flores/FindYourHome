import { Cliente } from './cliente';
import { Publicador } from './publicador';

export class Usuario {
    id: number;
    username: string;
    password: string;
    roles: string[] = [];
    cliente:Cliente;
    publicador:Publicador;
}
