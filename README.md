# test-admin

## Installation

Install JSON Server 

```
npm install -g json-server
```

You'll find a `db.json` file in the `src` directory that includes the users you can use.

Start JSON Server

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/books/1](http://localhost:3000/books/1), you'll get

```json
{ "id": 1, "title": "Book 1", "author": 1 }
```


Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

The included data provider use [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). It fits REST APIs powered by [JSON Server](https://github.com/typicode/json-server), such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend. By default, we set it to targets [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Authentication

The included auth provider should only be used for development and test purposes.
You'll find a `users.json` file in the `src` directory that includes the users you can use.

You can sign in to the application with the following usernames and password:
- janedoe / password
- johndoe / password

## Books and Authors List

You'll find a `db.json` file in the `src` directory that includes the books and authors you can use.

## Description

Admin on book and author management, in which you can list, create, edit and delete items using the react-admin library.

## Author
[perezjair94](https://oquendo.vercel.app)

## My portfolio
[Jair Pérez](https://oquendo.verel.app)