<h1># REST-API:</h1>
REST API stands for REpresentational State Transfer API. It is a type of API (Application Programming Interface) that allows communication between different systems over the internet. REST APIs work by sending requests and receiving responses, typically in JSON format, between the client and server.

<br>
REST APIs use HTTP methods (such as GET, POST, PUT, DELETE) to define actions that can be performed on resources. These methods align with CRUD (Create, Read, Update, Delete) operations, which are used to manipulate resources over the web.

<h2>Various HTTP Methods Used in REST API:</h2>
<h3>1. GET Method:</h3>
The HTTP GET method is used to read (or retrieve) a representation of a resource. In the safe path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

<h3>2. POST Method:</h3>
The POST method is commonly used to create new resources. It is often used to create subordinate resources related to a parent resource. Upon successful creation, the server returns HTTP status 201 (Created) along with a Location header pointing to the newly created resource.

<h3>3. PUT Method:</h3>
PUT is an HTTP method used to update or create a resource on the server. When using PUT, the entire resource is sent in the request body, and it replaces the current resource at the specified URL. If the resource doesn’t exist, it can create a new one.

<h3>4. PATCH Method:</h3>
PATCH is an HTTP method used to partially update a resource on the server. Unlike PUT, PATCH only requires the fields that need to be updated to be sent in the request body. It modifies specific parts of the resource rather than replacing the entire resource.

<h3>5. DELETE Method:</h3>
 It is used to delete a resource identified by a URI. On successful deletion, return HTTP status 200 (OK) along with a response body.


 <h2>Create a Simple REST API using Node.js and Express:</h2>
 Now let’s create a REST AP and perform the various HTTP operations.

 <h3> Install the package.json:</h3>
 npm init

 <h3>Install Express:</h3>
 npm install express

<h3>install nodemon</h3>
 To install Nodemon, use the npm command npm install -g nodemon globally within your project.

 <h2>🛠️ Technologies & Packages Used:</h2>
 1) Node.js: JavaScript runtime environment.<br>
 2) Express.js: Framework to build APIs easily.<br>
3) fs (File System module): For logging API requests to a file (log.txt).

<h2>🔥 APIs Developed (Using Postman for Testing):</h2>
Postman => Postman is an API platform that helps developers build, test, and document APIs. 

GET /users: This route fetches the list of users (or mock data in this case). <br>
POST /users: This route accepts JSON data from the client to create a new user.<br>
PUT /users/:id: This route updates the information of a user based on the user ID provided in the URL.<br>
DELETE /users/:id: This route deletes a user with the specified ID.


<h1>🧪 Testing APIs with Postman:</h1>
<h3>GET /api/users</h3>

   Send a GET request to http://localhost:8000/api/users.<br>
   Response: All users from MOCK_DATA.json.

<h3>GET /api/users/:id</h3>

Example: http://localhost:8000/api/users/2. <br>
Response: Specific user details.

<h2>POST /api/users</h2>

Send a POST request with body (form-data or x-www-form-urlencoded).<br>
Response: {status: "pending"}

<h2>PATCH /api/users/:id</h2>

Send a PATCH request with body to update user info.<br>
Response: {status: "pending"}

<h3>DELETE /api/users/:id</h3>

Send a DELETE request to remove a user.<br>
Response: {status: "pending"}
<br>

✏️ Postman is very useful here because you can easily create different types of requests (GET, POST, PATCH, DELETE) and test how your server behaves.


<h2>⚡ Extra Info About Logging:</h2>
Every request made to the server (through Postman/browser) is automatically logged in a log.txt file. <br>

The log includes:<br>
Timestamp<br>
IP Address<br>
HTTP Method (GET, POST, etc.)<br>
Request Path
