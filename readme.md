# Pix Mercado Pago Service

Este projeto é um serviço de pagamento utilizando a API do Mercado Pago para realizar transações via Pix.

## Estrutura do Projeto

- `src/app.ts`: Arquivo principal que configura e inicia o servidor Express.
- `src/routes/pixRoutes.ts`: Define as rotas relacionadas aos pagamentos Pix.
- `src/controllers/PixController.ts`: Controlador que gerencia as requisições e respostas para as rotas Pix.
- `src/services/mercadoPago/pixMercadoPagoService.ts`: Serviço que interage com a API do Mercado Pago para criar pagamentos via Pix.

## Configuração

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd pix-mercado-pago
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
        ```
        MP_ACCESS_TOKEN=SEU_ACCESS_TOKEN
        PUBLIC_KEY_MERCADO_PAGO=SUA_PUBLIC_KEY
        ```

### Executando o Projeto

1. Inicie o servidor:
    ```sh
    npm start
    ```

2. O servidor estará rodando na porta `3000`.

## Endpoints

### Criar Pagamento Pix

- **URL**: `/pix/create`
- **Método**: `POST`
- **Body**:
    ```json
    {
        "amount": 100,
        "description": "Descrição do pagamento",
        "email": "email@exemplo.com"
    }
    ```

