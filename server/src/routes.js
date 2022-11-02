const express = require("express");

const { RouteNotFoundError } = require("./lib/errors");


const apiRouter = express.Router();

module.exports = () =>
    apiRouter
        .get("/onboarding/healthcheck", (req, res) => res.send("microservices-onboarding is up and running !!!!!"))
        .all("*", () => {
            throw new RouteNotFoundError();
        });
