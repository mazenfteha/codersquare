# ERD: codesquare
A social web app for sharing learning resources in a hackernews-style experience.  
It allows users to post links to articles, videos, channels, or other public resources on the web, and other users to vote and comment on those resources.  

## Storage   
We'll use a relational database (schema follows) to fast retrieval of posts and comments.  

### Schema:  
#### users:  

|  Column |  Type   |
|---------|---------|
|ID  |STRING/UUID|
|First/Last name|STRING|
|Password|STRING|
|Email|STRING|
|Username|STRING|

#### Posts:  
|  Column |  Type   |
|---------|---------|
|ID|STRING/UUID|
|Title|STRING|
|URL|STRING|
|UserId|STRING/UUID|
|PostedAt|Timestamp|  

#### Likes:
|  Column |  Type   |
|---------|---------|
|UserId|STRING/UUID|
|PostId|STRING|  

#### Comments:
|  Column |  Type   |
|---------|---------|
|ID|STRING|
|UserId|STRING/UUID|
|PostId|STRING|
|Comment|STRING|
|PostedAt|Timestamp|  

### Server  
A simple HTTP server is responsible for authentication, serving stored data, and potentially ingesting and serving analytics data.  

* Node.js is selected for implementing the server for speed of development.  
* Express.js is the web server framework.  
* Sequelize to be used as an ORM.  

### Auth:
OAuth is to be added initially or later for Google + Facebook and maybe others  

### API
#### Auth:
/signIn  [POST]
/signUp  [POST]
/signOut [POST]

#### Posts:
/posts/list [GET]
/posts/new  [POST]
/posts/:id  [GET]
/posts/:id  [DELETE]  

#### Likes:  
/likes/new [POST]  

#### Comments:  
/comments/new  [POST]
/comments/list [GET]
/comments/:id  [DELETE]