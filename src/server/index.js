import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App";

// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server');
// const App = require('../App');

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.send(`
    <!DOCTYPE HTML>
    <head>
    <title> Universal </title>
    <link rel="stylesheet" href="css/main.css">
    <script src="/bundle.js" defer> </script>
    </head>
    <body>
    <div id="root">${renderToString(<App/>)}</div>
    </body>
    </html>
    `);
});
app.listen(process.env.PORT || 3001, () => {
  console.log("server is listening");
});
