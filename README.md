## Atividade Aula 03

- Projeto desenvolvido utilizando NestJS para criar uma API REST com endpoints para gerenciamento de usuários.

### Endpoints

- GET `/users` - Lista todos os usuários
- GET `/users/:id` - Busca um usuário pelo ID
- POST `/users` - Cria um novo usuário
- DELETE `/users/:id` - Remove um usuário

#### Exemplo de requisição POST
```json
{
    "name": "Novo Usuário",
    "email": "novo@email.com"
}
```

### Validações

- Nome e email são obrigatórios
- Email deve ser único
- IDs são gerados automaticamente

## Autor
- Arthur Batista - arthur.batista@aluno.faculdadeimpacta.com.br
