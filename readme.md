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


#### Criando um produto

- **endpoint:** `/api/products/`
- **method:** `POST`
- **params:** Em Headers Authorization Token <seutoken>
- **200 Response:**
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

