# Blog Platform API

## Laboratory work
Documentation of API using OpenAPI and Zudoku.

## Author
Valerii
Group: 7.F2.25-2-z

## Purpose of the work
The purpose of this work is to learn the OpenAPI specification and use it to describe REST API, generate Python SDK, and create API documentation.

## Selected domain
Blog platform

## Entities
- Article
- Comment

## Designed REST API

### Article
- `GET /articles` — get all articles
- `GET /articles/{id}` — get article by id
- `POST /articles` — create article
- `PUT /articles/{id}` — update article
- `DELETE /articles/{id}` — delete article

### Comment
- `GET /articles/{id}/comments` — get comments for article
- `POST /articles/{id}/comments` — add comment
- `DELETE /comments/{id}` — delete comment

## OpenAPI
The API is described in the `openapi.yaml` file using OpenAPI format.

## Python SDK
Python SDK was generated from the OpenAPI specification using OpenAPI Generator.

## Zudoku
A Zudoku project was created for API documentation. Additional pages were prepared:
- Introduction
- Installation
- Authorization
- About

## Authorization
The API uses Bearer Token authentication format in documentation example:

```http
Authorization: Bearer YOUR_TOKEN
