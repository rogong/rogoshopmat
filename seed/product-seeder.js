var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping');


var products = [
   new Product({
        imagePath: '/images/rings/1.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),

     new Product({
        imagePath: '/images/rings/2.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
  new Product({
        imagePath: '/images/rings/3.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/4.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/5.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/6.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/7.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/8.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/9.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/10.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/11.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/12.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/13.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/14.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/15.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    }),
     new Product({
        imagePath: '/images/rings/16.jpg',
        title: 'Product Name',
        description: 'Product description',
        price: 200
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}