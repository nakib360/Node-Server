import express from "express";
import cors from "cors";

const middleWares = (app) => {
    app.use(cors());
    app.use(express.static("public"));
    app.use(express.json());
};

export default middleWares;

