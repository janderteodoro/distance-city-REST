# distance-city-REST

## introduction 
This is the simple REST api why perform the calculation in between two citys, in short.
For this happen, we need consult a route POST with a small contract. See below.

## step 1
By having the node installed in your PC, clone this project using the git clone, so run the code
`npm install` in source path. After all dependency be installed. 

## step 2 
Now we will create the environment variables. Then in your source path create a new file weith de name `.env` only. Open it and here you will put only two informations: Port wath the API will run and enpoint of API whi we will cosumer.

Model env:<br>
```
PORT=4444<br>
ENDPOINTCEP=https://viacep.com.br/ws
```

## step 3 
Hour of runner our system. In source runner `npm start`, then we have something similiar with this: 

![api runner with nodemon](/img/npmstart.png)

## step 4
In your front end ( in my case is the Insomnia, because i'm backend only kkkk ) make the request for consume the route with POST method HTTP in `http://localhost:<yourport>/city`.

Create a payload with the following structure and replace for your informations: <br>

![api runner with nodemon](/img/payload.png)

To get easier: <br>
```
{
	"city1": {
		"state": "SP",
		"name": "Osasco", 
		"street": "sao"
	}, 
	"city2": {
		"state": "MG", 
		"name": "Pouso Alegre",
		"street": "sao"
	}
}
```

Then finally will have the response, similiar this: <br>

```
{
	"message": "route of search distance betwen rwo citys",
	"distance": 169.05
}
```

Now you can know the distance between two citys easily 
🥸

# IMPORTANT

**The street parameter is required**, else will have a 400 status code with response
