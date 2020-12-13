# 📚 Sobre
Integração entre API Rest com React

## 💻 Instalação
BACK END
````
$ python -m venv myvenv
$ myvenv\Scripts\activate
$ pip install Django
$ pip install djangorestframework
$ mkdir backend
$ cd backend
$ django-admin startproject backend .
$ django-admin startapp api
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py createsuperuser
$ pip install django-cors-headers
$ pip install python-decouple
$ pip install dj-database-url
$ pip install dj-static
````
FRONT END
````

$ node -v
$ npx create-react-app frontend
$ cd frontend
$ npm start
$ npm install react-router-dom
$ npm install --save styled-components
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm install --save @fortawesome/free-solid-svg-icons
$ npm install --save @fortawesome/react-fontawesome
$ npm install react-router-dom

````

## 💻 API Endpoints


- **endpoint:** `/users/register/`
- **method:** `POST`
- **params:** 
```json
{
"email": "LE@gmail.com",
"username":"Le123",
"password":"Le123"
}
```
- **201 Response:**
```json
{
"email": "LE@gmail.com",
"username":"Le123",
"password":"Le123"
}
```
#### Authenticando o usuário

- **endpoint:** `/api-token-auth/`
- **method:** `POST`
- **params:** Em Headers passar : Content-Type application/json

```json
   {
   "email": "LE@gmail.com",
   "username":"Le123",
   "password":"Le123"
}
```
- **200 Response**
```json
 {
  "token": "53d8c3c26ad3aec161408627b4a2e83d117eea0"
}
```


#### Criando um produto

- **endpoint:** `/api/products/`
- **method:** `POST`
- **params:** Em Headers Authorization Token **seutoken**,  Content-Type application/json

```json
   {
    "manufacturer": "Singenta3",
    "name": "Mata grilo",
    "description": "Produto pra eliminar barata", 		
    "group": "ORGANOFOSFORADO"
  }
```
- **201 Response**
```json
 {
    "manufacturer": "Singenta3",
    "name": "Mata grilo",
    "description": "Produto pra eliminar barata", 		
    "group": "ORGANOFOSFORADO"
  }
```

#### listando produtos

- **endpoint:** `/api/products/`
- **method:** `GET`
- **params:** Em Headers Authorization Token **seutoken**
- **200 Response:**
```json
    {
    "id": 1,
    "manufacturer": "Singenta4",
    "name": "Mata barata voadora2",
    "description": "Produto pra eliminar monstros",
    "group": "ORGANOFOSFORADO",
   
  },
  {
    "id": 6,
    "manufacturer": "Singenta",
    "name": "Pyrinex",
    "description": "Produto Organofosforado",
    "group": "ORG",
    
  }
```


