# E-Commerce Project

**Student Name**: Hem pancholi   
**Student Number**:  8980704
**Date**: 7/31/2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

### Database Schema Design

**Products Schema (MongoDB)**
- `ProductId` : Integer
- `Product Name`: String
- `description`: String
- `price`: Number
- `Size` : String
- `Color` : String
- `category`: String
- `stock`: Number
- `imageUrl`: String
- `createdAt`: date

**Orders Schema (MongoDB)**
- `OrderId` : Integer
- `User-Id` : Integer
- `Product-Id` :Integer (reference product schema)
- `Quantity` : number
- `Total` : Integer
- `Shipping Address` : String 
- `createdAt`: date

**Cart Schema** 
- `cartId` : cartId
- `User-Id`: Integer
- `Product-Id` : integer
- `total`: number
- `createdAt`: date

**Users Schema (MongoDB)**
- `User-Id`: Integer
- `username`: String
- `password`: String
- `email`: String
- `Mobile Number`: Integer
- `Gender`: String
- `address`: String
- `createdAt`: date

### Frontend Setup

1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
