const fs = require("fs");
const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with the origin of your frontend server
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Ecomm",
});
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database!");
  }
});
// read all data from the mysql database
app.get("/allproducts", (req, res) => {
  const query = "SELECT * FROM products";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

// app.use(express.json());
// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "password",
//   database: "Ecomm",
// });

// connection.connect((error) => {
//   if (error) {
//     console.error("Error connecting to the database:", error);
//   } else {
//     console.log("Connected to the database!");
//   }
// });

// app.get("/jsondata", (req, res) => {
//   const query = "SELECT * FROM products";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       console.log({ results });
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/aliproducts", (req, res) => {
//   const query = "SELECT * FROM products WHERE name LIKE 'ali%'";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/amandaproducts", (req, res) => {
//   const query = "SELECT * FROM products WHERE name LIKE 'amanda%'";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/daisyproducts", (req, res) => {
//   const query = "SELECT * FROM products WHERE name LIKE 'daisy%'";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/jenniferproducts", (req, res) => {
//   const query = "SELECT * FROM products WHERE name LIKE 'jennifer%'";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/mirabelproducts", (req, res) => {
//   const query = "SELECT * FROM products WHERE name LIKE 'mirabel%'";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/lowtohigh", (req, res) => {
//   const query = "SELECT * FROM products ORDER BY price ASC";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get("/hightolow", (req, res) => {
//   const query = "SELECT * FROM products ORDER BY price DESC";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error executing the query:", error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`App is running on port ${port}...`);
// });
