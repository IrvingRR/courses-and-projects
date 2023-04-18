import { gql, ApolloServer, UserInputError } from "apollo-server";
import { v1 as uuid } from "uuid";

const persons = [
  {
    name: "Midu",
    phone: "034-1234567",
    street: "Calle Frontend",
    city: "Barcelona",
    id: "1",
  },

  {
    name: "Youseff",
    phone: "044-123456",
    street: "Avenida Fullstack",
    city: "Mataro",
    id: "2",
  },

  {
    name: "Itzi",
    street: "Pasaje Testing",
    city: "Ibiza",
    id: "3",
  },
];

const products = [
  {
    id: "1",
    name: "Chamarra Levi´s",
    price: 2000,
    discount: 10,
    category: "Chamarras",
  },

  {
    id: "2",
    name: "Pantalón Levi´s",
    price: 1000,
    discount: null,
    category: "Pantalones",
  },

  {
    id: "3",
    name: "Mochila Nike",
    price: 3000,
    discount: 30,
    category: "Mochilas",
  },

  {
    id: "4",
    name: "Celular Samsung",
    price: 5000,
    discount: 20,
    category: "Celulares",
  },
];

const tasks = [
  {
    id: "1",
    title: "Do my homework",
    description: "I have to do my homework today",
    status: "Completed",
  },

  {
    id: "2",
    title: "Clean the kitchen",
    description: "I have to clean the kitchen",
    status: "Incomplete",
  },

  {
    id: "3",
    title: "Cook dinner",
    description: "I have to cook the dinner to my family",
    status: "Incomplete",
  },

  {
    id: "4",
    title: "Clean the bathroom",
    description: "I have to clean the bathroom",
    status: "InProgress",
  },
];

// Definitions of types
const typeDefinitions = gql`
  enum YesNo {
    Yes
    No
  }

  enum StatusTask {
    Completed
    Incomplete
    InProgress
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: StatusTask!
  }

  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Product {
    id: ID!
    name: String!
    price: Int!
    discount: Int
    category: String!
    finalPrice: Int!
  }

  type Query {
    # Persons queries
    personCount: Int!
    allPersons(phone: YesNo): [Person]!
    findPerson(name: String!): Person!

    # Products queries
    productsCount: Int!
    allProducts: [Product]

    # Tasks queries
    allTasks: [Task]
    findTask(title: String!): [Task]
    filterTaskByStatus(status: StatusTask!): [Task]
  }

  type Mutation {
    # Persons mutations
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person

    updatePhone(name: String!, phone: String!): Person
  }
`;

// Creating the resolvers to manage the return of the information
const resolvers = {
  Query: {
    // Person
    personCount: () => persons.length,
    allPersons: async (root, args) => {
      if (!args.phone) return persons;

      return persons.filter((person) =>
        args.phone === "Yes" ? person.phone : !person.phone
      );
    },
    findPerson: (root, args) => {
      const { name } = args;
      return persons.find(
        (person) => person.name.toLowerCase() === name.toLowerCase()
      );
    },

    // Products
    productsCount: () => products.length,
    allProducts: () => products,

    // Tasks
    allTasks: () => tasks,
    findTask: (root, args) =>
      tasks.filter((task) =>
        task.title.toLowerCase().includes(args.title.toLowerCase())
      ),
    filterTaskByStatus: (root, args) =>
      tasks.filter((task) => task.status === args.status),
  },

  Mutation: {
    // Person
    addPerson: (root, args) => {
      if (persons.find((person) => person.name === args.name)) {
        throw new UserInputError(`The name ${args.name} is already exist`);
      }

      const person = { ...args, id: uuid() };
      persons.push(person);
      return person;
    },

    updatePhone: (root, args) => {
      const personIndex = persons.findIndex(
        (person) => person.name === args.name
      );

      if (personIndex === -1) return null;

      const person = persons[personIndex];
      const updatePerson = { ...person, phone: args.phone };

      persons[personIndex] = updatePerson;

      return updatePerson;
    },
  },

  Person: {
    address: (root) => {
      return {
        street: root.street,
        city: root.city,
      };
    },
  },

  Product: {
    finalPrice: (root) => {
      let percentage = 100 - root.discount;
      let discount = percentage / 100;
      return root.price * discount;
    },
  },
};

// Creating apollo server
const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers: resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Start server at ${url}`);
});
