# algo domain task 

### api task
#### SCRIPT
1. To install the dependecies used in this project
    ```npm intsall``` or  ```npm i```
2. To run the server run below command
  ```node server.js```


### api routes
we are using this project on local server so base url will be
```localhost:8080```
1. add product 
```
   url - /addProduct
   body -  {
            "name": name of product,
            "type": type of product,
            "category":category of product,
            "price":price of product
        }
    response - product id 
```
2. update product 
```
    url - /updateProduct
    body -  {
              "productId":product id,
              "details":{
              "name": name of product,
                "type": type of product,
                 "category":category of product,
                  "price":price of product
              }
}
```
