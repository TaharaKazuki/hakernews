const { ApolloServer, gql } = require('apollo-server')

let links = [
  {
    id: 'link-0',
    description: 'GraphQlのチュートリアル',
    url: 'www.udemy',
  },
]

const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`

const resolvers = {
  Query: {
    info: () => 'HackerNewsクローン',
    feed: () => links,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  ${url}でサーバーを起動中`)
})
