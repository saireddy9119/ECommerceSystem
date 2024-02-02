Project Explanation:


Technologies used is nodejs,expressjs,mongodb,mongoose.


I use MVC Pattern to build this restapi project.


Mongoose is for database connection and schema of project.


Here,I use localhost mongodb compass.


The connection String of mongodb is in .env file.


For Start running project in cmd use npm start dev.


We should access api endpoint localhost:5001/api/products in postman.


for adding products use http post method with endpoint localhost:5001/api/products in postman.


for getting products use http get method with endpoint localhost:5001/api/products in postman.



for getting id products use http get method with endpoint localhost:5001/api/products/id.


for updating products use http put method with endpoint localhost:5001/api/product/id.


id is generated when save into mongodb.


for delete products use http delete method with endpoint localhost:5001/api/product/id.


for search products with product name,description,price,variant name use endpoint localhost:5001/api/product/search?property=value.

