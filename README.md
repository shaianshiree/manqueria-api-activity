# RESTful API Activity - Princess Shaina J. Manqueria

## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?  
- Answer: We put `BASE_URI` in `.env` so that we can easily change the URL if needed, and to keep sensitive information safe. This way, the code stays clean and can work on different environments without changing the code itself.

**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?  
- Answer: We use plural nouns to show that the route represents a collection of items, like many dishes. It makes the API easier to understand and follow common naming rules.

**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?  
- Answer: `201 Created` is used when something is successfully created, like adding a new dish. `200 OK` is used when a request is successful, like getting a list of dishes.  

- Why is it important to return `404` instead of just an empty array or a generic error?  
- Answer: Returning `404` tells the user that the item really does not exist. An empty array or generic error can be confusing because the user might think the server is broken or the item is just empty.

**4. Testing:**
-  ![image](<assets/Screenshot 2026-01-30 190803.png>)

# manqueria-api-activity

