
# Todo List (Backend)
## Introduction
A simple todolist applcation written in Typescript and use NestJs, GraphQL and MySQL.

## Requirement
- MySQL
- NodeJs

## Installation
- Clone this repo
```bash
git clone https://github.com/azreenzakaria/to-do-list.git
```
- Create .env file and make sure your .env file have these:
```bash
DATABASE_HOST=localhost
DATABASE_PORT= YOUR_DESIRED_PORT
DATABASE_USERNAME=YOUR_DATABASE_USERNAME
DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD
DATABASE_NAME=YOUR_DATABASE_NAME
SECRET_KEY=""
SECRET_IV=""
```

## Usage
>**NOTE**<br>
>For the database, please make sure to do migration first by executing: npm run migration:run

To run this application, execute:
```bash
npm run start:dev
```

## Conclusion
This To-Do List project, developed using TypeScript, NestJS, GraphQL and MySQL demonstrates the fundamental principles of CRUD operations and one-to-many relationship.

### Example GRAPHQL API
#### getProject
```bash
query getProject {
  getProject {
    result {
      id
      title
    }
  }
}
```
#### createProject
```bash
mutation createProject($title: String!) {
  createProject(createProjectInput: {title: $title}) {
    message
  }
}
}
```
```bash
{
  "title": "Buy groceries"
}
```
