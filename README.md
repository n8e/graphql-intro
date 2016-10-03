# graphql-intro
Simple graphql server and schema config (https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2#.n1yb3ct6f)


## Installation
Clone the repository `git clone git@github.com:n8e/graphql-intro.git`
Run `cd graphql-intro && npm install`
Start server `node index.js`

## Test query and mutation on terminal

`$ curl -XPOST -H "Content-Type:application/graphql"  -d 'query RootQueryType { count }' http://localhost:3000/graphql` should return
```
{
  "data": {
    "count": 0
  }
}
```

The above can be written as:
`$ curl -XPOST -H 'Content-Type:application/graphql'  -d '{ count }' http://localhost:3000/graphql`

Checking the server schema fields:
`$ curl -XPOST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description} }}}' http://localhost:3000/graphql`
The return value is:
```
{
  "data": {
    "__schema": {
      "queryType": {
        "name": "RootQueryType",
        "fields": [
          {
            "name": "count",
            "description": null
          }
        ]
      }
    }
  }
}
```

To check mutation:
`$ curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCount }' http://localhost:3000/graphql`. This updates the count field.
The return value is:
```
{
  "data": {
    "count": 1
  }
}
```

The js is written in ES5 standard.
