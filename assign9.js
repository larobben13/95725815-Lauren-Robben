//Assignment #9

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
const getAllPosts = async () => {
    const posts = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const jsonUserData = await posts.json()
    console.log(jsonUserData);
    return jsonUserData;
};
getAllPosts();

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
const getAllUsers = async () => {
   const users = await fetch("https://jsonplaceholder.typicode.com/users");
   const jsonUsersData = await users.json()
   console.log(jsonUsersData);
   return jsonUsersData;
};
getAllUsers();
    

// 3) Create a function named "getComments".
// This function needs to accept a "postID" parameter.
// Use Fetch with Async/Await to request all the comments for the postID that
// is passed in as a parameter.
// The function should return all the comments for the requested postID as JSON data.
const getComments = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await response.json();
    console.log("comments", comments);
    return comments;
};  
getComments();

// 4) Create a function named "getUser".
// This function needs to accept a "userID" parameter.
// Use Fetch with Async/Await to request the data for the requested user.
// The function should return JSON data.
const getUser = async () => {
    const userID = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const jsonUsersData = await userID.json()
    console.log(jsonUsersData);
    return jsonUsersData;
 
};
getUser();

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID" parameter.
// Use Fetch with Async/Await to request all of the todos for the requested user.
// The function should return JSON data.
const getTodosForUser = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
    const jsonUserData = await resp.json();
    console.log(jsonUserData);
    return jsonUserData; 
}; 
getTodosForUser();