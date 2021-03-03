# backend

## ☝️ **Pitch**

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.

You will build a platform to enable these business owners to create listing for items they have for sale.

## ✅ **MVP**

1. A small business `owner` can login and see relevant prices in various categories to help them set their own prices.

2. They can also make listing for `items` they want to sell, which will show up to all `users`.

3. They add a new `item` by selecting their market `location` and typing in their item's `name`, `description`, and `price`.

## 🏃‍♀️ **Stretch**

1. A business `owner` can upload their `picture` to their profile.

## 📦 Additional Resources

**Proof of concept:**

[http://sautiafrica.org/](http://sautiafrica.org/)

**Example product reference list:** [https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0](https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0)

**API documentation**

BaseURL:  https://african-marketplace-tt27.herokuapp.com/api

List of Endpoints:
User (auth)
BaseURL/auth/register (POST) - register a user
(test user is in the example)
Parameters:
| Name       | Type    | Required 
| ---------- | ------- | --------
| name       | string  | yes
| email      | string  | yes       
| password   | string  | yes  
| country_id | integer | yes  
Example of what to use:
{
  name: 'testName',
  email: 'test@gmail.com',
  password: 'testPassword',
  country_id: 1,
}

BaseURL/auth/login (POST) - login a user
(test user is in the example)
Parameters:
| Name     | Type   | Required |
| -------- | ------ | -------- |
| email    | string | yes      |
| password | string | yes      |
Example of what to use:
{
  username: "test@gmail.com",
  password: "testPassword"
}

Products
BaseURL/products (GET) - gets all products
BaseURL/products/:id (GET) - gets an individual product
BaseURL/products (POST) - post a product
BaseURL/products/:id (PUT) - update a product
BaseURL/products/:id (DELETE) - delete a product
Parameters:
| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| prod_name     | string     | yes      | The name of the product           |
| prod_desc     | string     | yes      | The description of the product    |
| price         | decimal    | no       | The price of the product          |
| inventory     | integer    | no       | Number of products available      |
| image         | string     | no       | Image of the product              |
| category_id   | integer    | no       | The id of the category            |
| category_name | string     | no       | The name of the category          |
| type_id       | integer    | no       | The id of the type                |
| type_name     | string     | no       | The name of the type              |
| unit_id       | integer    | no       | the id of the unit                |
| unit_name     | string     | no       | the id of the name                |

Category
BaseURL/categories (GET) - gets all categories
BaseURL/categories/:id (GET) - gets individual category
BaseURL/categories (POST) - post a category
BaseURL/categories/:id (PUT) - updates a category
BaseURL/categories/:id (DELETE) - delete a category
Parameters:
| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| category_name | string     | yes      | The name of the category          |

Type
BaseURL/types (GET) - gets all types
BaseURL/types/:id (GET) - gets individual types
BaseURL/types (POST) - post a type
BaseURL/types/:id (PUT) - updates a type
BaseURL/types/:id (DELETE) - delete a type
Parameters:
| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| type_name     | string     | yes      | The name of the type              |

Unit
BaseURL/units (GET) - gets all types
BaseURL/units/:id (GET) - gets individual unit
BaseURL/units (POST) - post a unit
BaseURL/units/:id (PUT) - updates a unit
BaseURL/units/:id (DELETE) - delete a unit
Parameters:
| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| unit_name     | string     | yes      | The name of the unit              |

