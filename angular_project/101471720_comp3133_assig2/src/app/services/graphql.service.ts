import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  constructor(private apollo: Apollo) {}

  login(email: string, password: string) {
    return this.apollo
      .query({
        query: gql`
          query Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token
              user {
                id
                username
                email
              }
            }
          }
        `,
        variables: { email, password },
        fetchPolicy: 'no-cache',
      })
      .pipe(map((result: any) => result.data.login));
  }

  signup(username: string, email: string, password: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation Signup(
          $username: String!
          $email: String!
          $password: String!
        ) {
          signup(username: $username, email: $email, password: $password) {
            id
            username
            email
          }
        }
      `,
      variables: { username, email, password },
    });
  }

  addEmployee(
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    designation: string,
    salary: number,
    dateOfJoining: string,
    department: string,
    employeePhoto: string
  ) {
    return this.apollo.mutate({
      mutation: gql`
        mutation AddEmployee(
          $firstName: String!
          $lastName: String!
          $email: String!
          $gender: String!
          $designation: String!
          $salary: Float!
          $dateOfJoining: String!
          $department: String!
          $employeePhoto: String
        ) {
          addEmployee(
            first_name: $firstName
            last_name: $lastName
            email: $email
            gender: $gender
            designation: $designation
            salary: $salary
            date_of_joining: $dateOfJoining
            department: $department
            employee_photo: $employeePhoto
          ) {
            id
          }
        }
      `,
      variables: {
        firstName,
        lastName,
        email,
        gender,
        designation,
        salary,
        dateOfJoining,
        department,
        employeePhoto,
      },
    });
  }

  getAllEmployees() {
    return this.apollo.query({
      query: gql`
        query {
          getAllEmployees {
            id
            first_name
            last_name
            email
            gender
            designation
            salary
            date_of_joining
            department
            employee_photo
            created_at
            updated_at
          }
        }
      `,
      fetchPolicy: 'no-cache',
    });
  }

  getEmployeeById(id: string) {
    return this.apollo.query({
      query: gql`
        query ($getEmployeeByIdId: ID!) {
          getEmployeeById(id: $getEmployeeByIdId) {
            id
            first_name
            last_name
            email
            gender
            designation
            salary
            date_of_joining
            department
            employee_photo
            created_at
            updated_at
          }
        }
      `,
      variables: { getEmployeeByIdId: id },
    });
  }

  updateEmployee(employee: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateEmployee(
          $updateEmployeeId: ID!
          $firstName: String
          $lastName: String
          $email: String
          $gender: String
          $designation: String
          $salary: Float
          $dateOfJoining: String
          $department: String
          $employeePhoto: String
        ) {
          updateEmployee(
            id: $updateEmployeeId
            first_name: $firstName
            last_name: $lastName
            email: $email
            gender: $gender
            designation: $designation
            salary: $salary
            date_of_joining: $dateOfJoining
            department: $department
            employee_photo: $employeePhoto
          ) {
            id
            first_name
            last_name
            email
            gender
            designation
            salary
            date_of_joining
            department
            employee_photo
            created_at
            updated_at
          }
        }
      `,
      variables: {
        updateEmployeeId: employee.id,
        firstName: employee.first_name,
        lastName: employee.last_name,
        email: employee.email,
        gender: employee.gender,
        designation: employee.designation,
        salary: parseFloat(employee.salary),
        dateOfJoining: employee.date_of_joining,
        department: employee.department,
        employeePhoto: employee.employee_photo || null,
      },
    });
  }

  deleteEmployee(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($deleteEmployeeId: ID!) {
          deleteEmployee(id: $deleteEmployeeId)
        }
      `,
      variables: { deleteEmployeeId: id },
    });
  }
}
