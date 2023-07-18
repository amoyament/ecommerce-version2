// Import required modules
const fs = require("fs");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Set port number
const port = 5000;

// Enable JSON parsing and CORS
app.use(express.json());
app.use(cors());

// Connect to MySQL database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "Ecomm",
});

// Handle connection errors
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
  } else {
    console.log("Connected to database!");
  }
});

// Route to get all products
app.get("/allproducts", (req, res) => {
  // SQL query
  const query = "SELECT * FROM products";

  // Execute query
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// read all Ali products from the mysql database
app.get("/aliproducts", (req, res) => {
  const query = "SELECT * FROM products  WHERE name LIKE 'ali%'";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// read all Amanda products from the mysql database
app.get("/amandaproducts", (req, res) => {
  const query = "SELECT * FROM products  WHERE name LIKE 'amanda%'";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// read all Daisy products from the mysql database
app.get("/daisyproducts", (req, res) => {
  const query = "SELECT * FROM products  WHERE name LIKE 'daisy%'";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// read all Jennifer products from the mysql database
app.get("/jenniferproducts", (req, res) => {
  const query = "SELECT * FROM products  WHERE name LIKE 'jennifer%'";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// read all Mirabel products from the mysql database
app.get("/mirabelproducts", (req, res) => {
  const query = "SELECT * FROM products  WHERE name LIKE 'mirabel%'";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
