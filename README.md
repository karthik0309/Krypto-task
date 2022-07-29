# Table
- [Demo](#demo)
- [Tools](#tools)
- [Roadmap](#roadmap)
- [API Endpoints](#apiendpoints)
- [Output](#output)


## demo
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://drive.google.com/file/d/1mCDTYCGcSr6uaJDUSNKgChUmFOS2Y-yd/view?usp=sharing)


## tools
- Backend
    - Django
    - SQLtite3
    - Cloundinary(image storage)
- Frontend
    - React js
    - Lazy loading
    - Context API
    - Module CSS

<!-- ROADMAP -->
## roadmap

- [x] ~~Build Rest API~~
- [x] ~~Implemented all CRUD Operations~~
- [x] ~~Created Fronted~~
- [x] ~~Integrated with backend~~
- []  Need to integrate favourites API
- []  Need to replace text with icons



## apiendpoints
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| [/users](#users) | Lists all available users |
| [/products](#products) | Lists all available products |
| [/orders](#orders) | Lists all available orders  
| [/favourites](#favourites) | Lists all available favourites


# API endpoints and their results

## users
- create users 
    - fields required: username,email,password 

```js
{
    "status": 200,
    "payload": {
        "id": 4,
        "last_login": null,
        "is_superuser": false,
        "username": "kedaar",
        "first_name": "",
        "last_name": "",
        "is_staff": false,
        "is_active": true,
        "date_joined": "2022-07-29T17:07:21.691252Z",
        "full_name": "kedaar",
        "email": "kedaar@gmail.com",
        "created_at": "2022-07-29T17:07:21.691986Z",
        "updated_at": "2022-07-29T17:07:21.692008Z",
        "groups": [],
        "user_permissions": []
    },
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1OTIwMDg0MSwiaWF0IjoxNjU5MTE0NDQxLCJqdGkiOiI4MzgyZGE2OTJjMmE0N2ViODA4YjdjNDI2Mzg0OTJjZSIsInVzZXJfaWQiOjR9.V6KST0acCqUB3SlTIZMulguYbGvV1TxoOf8qds6UhqM",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MjAwODQxLCJpYXQiOjE2NTkxMTQ0NDEsImp0aSI6ImQ2MmY0MGYzNjY0OTRhMDJhOGRlYTQ3Y2E4NmU4ZGM1IiwidXNlcl9pZCI6NH0.3FNcAKxYTT2DeWfoo7sHFTCqxeFpCzrshtza-UkOmrM"
}
```

- login
    - fields required: username,password 

```js
{
    "status": 200,
    "payload": {
        "id": 1,
        "last_login": null,
        "is_superuser": false,
        "username": "Karthik",
        "first_name": "",
        "last_name": "",
        "is_staff": false,
        "is_active": true,
        "date_joined": "2022-07-29T08:25:24.850426Z",
        "full_name": "karthik",
        "email": "karthik392001@gmail.com",
        "created_at": "2022-07-29T08:25:24.850743Z",
        "updated_at": "2022-07-29T08:25:24.850761Z",
        "groups": [],
        "user_permissions": []
    },
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1OTIwMTA5OCwiaWF0IjoxNjU5MTE0Njk4LCJqdGkiOiI0MmZjY2IyYzljY2I0MzI4YjUwNmM4MGY2ZmFhZmJhYSIsInVzZXJfaWQiOjF9.JjhUu5tvGA21kU1Z2ZyowdQkDMt2biaIKiHO5g6O_LU",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MjAxMDk4LCJpYXQiOjE2NTkxMTQ2OTgsImp0aSI6Ijk5ODkwYjg5NzMwOTQ2ZjRhOGU4ODE3NTMyNjkyOGUwIiwidXNlcl9pZCI6MX0.Or8fi8_d6aOaTLrat-7fU9oSIcWB6UWpvg1O_TM000w"
}
```

## products

- create products
    - fields required: name, image, price,rating, message,bearer token

```js
{
    "id": 10,
    "name": "Cod Tshirt",
    "image": "image/upload/v1659114817/sv12np323xbfwlytc22q.jpg",
    "price": 23,
    "rating": 3,
    "message": "Slim Fit",
    "created_at": "2022-07-29T17:13:37.863587Z",
    "updated_at": "2022-07-29T17:13:37.863652Z"
}
```


- get all products
    - fields required: bearer token

```js
[
    {
        "id": 4,
        "name": "Mens T-shirt",
        "image": "image/upload/v1659113783/lhzvn5voioauca1kv3ht.jpg",
        "price": 200,
        "rating": 4,
        "message": "Mens Formal T-shirt slim fit",
        "created_at": "2022-07-29T16:56:23.923364Z",
        "updated_at": "2022-07-29T16:56:23.923442Z"
    },
    {
        "id": 5,
        "name": "Code T-shirt",
        "image": "image/upload/v1659113808/gwdmalu7c2e4jruzs6o2.jpg",
        "price": 300,
        "rating": 4,
        "message": "Mens Formal T-shirt slim fit",
        "created_at": "2022-07-29T16:56:49.009354Z",
        "updated_at": "2022-07-29T16:56:49.009487Z"
    },
    {
        "id": 6,
        "name": "Couple Tshirt",
        "image": "image/upload/v1659113843/h3gvlbbea489nctyqmme.jpg",
        "price": 350,
        "rating": 4,
        "message": "Couples Formal T-shirt slim fit",
        "created_at": "2022-07-29T16:57:23.642560Z",
        "updated_at": "2022-07-29T16:57:23.642615Z"
    }
]
```

- get product by id
    - fields required: bearer token,prod id, bearer token

```js
{
    "id": 5,
    "name": "Code T-shirt",
    "image": "image/upload/v1659113808/gwdmalu7c2e4jruzs6o2.jpg",
    "price": 300,
    "rating": 4,
    "message": "Mens Formal T-shirt slim fit",
    "created_at": "2022-07-29T16:56:49.009354Z",
    "updated_at": "2022-07-29T16:56:49.009487Z"
}
```


## orders

- create orders
    - required fields: user,products,total, bearer token

```js
{
    "id": 4,
    "total": 30,
    "created_at": "2022-07-29T17:17:17.651608Z",
    "updated_at": "2022-07-29T17:17:17.694697Z",
    "user": 1,
    "products": [
        4  <--product id
    ]
}
```

- get orders by user
    - required fields: userid, bearer token

```js
[
    {
        "id": 4,
        "total": 30,
        "created_at": "2022-07-29T17:17:17.651608Z",
        "updated_at": "2022-07-29T17:17:17.694697Z",
        "user": 1,
        "products": [
            4
        ]
    }
]
```

## favourites

- create favourites
    - fields required: username, productid, bearer token

```js
{
    "id": 2,
    "created_at": "2022-07-29T17:20:24.820294Z",
    "updated_at": "2022-07-29T17:20:24.828721Z",
    "user": 1,
    "products": [
        10
    ]
}
```

- get all favourites of user
    - required fields: user id, bearer token

```js
[
    {
        "id": 1,
        "created_at": "2022-07-29T09:10:45.192195Z",
        "updated_at": "2022-07-29T09:10:45.194301Z",
        "user": 1,
        "products": []
    },
    {
        "id": 2,
        "created_at": "2022-07-29T17:20:24.820294Z",
        "updated_at": "2022-07-29T17:20:24.828721Z",
        "user": 1,
        "products": [
            10
        ]
    }
]
```

## output

### Login page
![Alt text](./output/login.png)

### Signup page
![Alt text](./output/signup.png)

### Home page
![Alt text](./output/home.png)

### Product page
![Alt text](./output/product.png)

### Cart page
![Alt text](./output/cart.png)

### Order page
![Alt text](./output/cart.png)
