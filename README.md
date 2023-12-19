# Ecommerce API

This project is a basic Node.js and MongoDB API for managing product inventory in an ecommerce platform.

## Getting Started

Follow these steps to set up the project on your local system:

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository: git clone https://github.com/your-username/ecommerce-api.git
2. Navigate to the project folder (assuming you have already created a folder structure like assets,config, routes, controllers and model etc.)
3. Install dependencies
4. Write your code:
   Create your all APIs-
   1. Create a Product:POST http://localhost:8003/products/create
   2. List your products: GET http://localhost:8003/products
   3. Delete a product: DELETE http://localhost:8003/products/:id
   4. Update Quantity: POST http://localhost:8003/products/:id/update_quantity/?number=10
6. Run the server
7. Test your APIs in Postman
