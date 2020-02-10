## CaixaVirtual

**Virtual wallet NodeJS API for register incoming and outgoing transactions.**

### Installation

You can get this project following the steps below:

- *git clone https://github.com/VictorAlmeidaFonseca/CaixaVirtual.git*
- *cd CaixaVirtual*
- *npm install*
- *npm start*
- *then access url path **http://localhost:3000***

If the browser is showing the message *"The API is working!"* then it is working!

#### Getting by Docker

Also you can get the api by dockerhub following the steps below:

- *docker pull fonsecalmeida/vcaixa.dev*
- *docker run -p 8787:3000 -d fonsecalmeida/vcaixa.dev*
- *then access url path **http://localhost:8787*** 

If the browser is showing the message *"The API is working!"* then it is working!

#### Database storage


For this project we use MongoDB Atlas. MongoDB Atlas automates infrastructure would storing the all database on cloud. If you want, you can check or change the *db.connection.js* file at *src/models/*. For more infomation about the MongoDB Atlas: https://www.mongodb.com/cloud/atlas.


### Next Steps

After does the steps above, the API is available. Below there is the api quick documentation. For more provides detailed information about tha API you can check on the Postman service at the folowing link: https://bit.ly/2Seg2sD.

### Movimentacoes
 
 In this documentation movimentacoes is representation of the all transactions in API. E.g: incoming and outgoing.

**GET** (list all)
> Description: Show all movimentacoes in API.
```
 http://localhost:3000/movimentacoes
 ```

**GET** (get id)
>The request "get" a movimentacao object by id. You nedd change the "movimentacaoid" at url to current id.
```
http://localhost:3000/movimentacoes/movimentacaoid
```


**POST** (post movimentacoes)
> This request "post" send data to database:
```
http://localhost:3000/movimentacoes
```

This request post send data following the model:
```
saldoTotal : Number, 
movimentacoes : 
 [ { data: { type:Date, default:Date.now() },
   id: String, 
   categoria: { id: String, name: String }, 
   tipo: String, 
   valor: Number, 
   descricao: String } ]
```
**PUT** (update movimentacoe)
> The request "put" get the movimentacoes object by id and update any value.
```
http://localhost:3000/movimentacoes/movimentacaoid
```

**DEL** (delete movimentacoes)
> This request "delete" get movimentacoes object by id and delete. Return the message: "Movimentacao successfully deleted". You nedd change the "movimentacaoid" at url to current id.
```
http://localhost:3000/movimentacoes/movimentacaoid
```


