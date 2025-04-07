const { gql } = require("apollo-server-express");

/*Sudeepto Hasan-101471720*/
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        created_at: String
        updated_at: String
    }

    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        designation: String!
        salary: Float!
        date_of_joining: String!
        department: String!
        employee_photo: String
        created_at: String
        updated_at: String
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Query {
        login(email: String!, password: String!): AuthPayload
        getAllEmployees: [Employee]
        getEmployeeById(id: ID!): Employee
        getEmployeesByDesignationOrDepartment(designation: String, department: String): [Employee]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        addEmployee(
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
            designation: String!
            salary: Float!
            date_of_joining: String!
            department: String!
            employee_photo: String
        ): Employee
        updateEmployee(
            id: ID!
            first_name: String
            last_name: String
            email: String
            gender: String
            designation: String
            salary: Float
            date_of_joining: String
            department: String
            employee_photo: String
        ): Employee
        deleteEmployee(id: ID!): String
    }
`;

module.exports = typeDefs;
