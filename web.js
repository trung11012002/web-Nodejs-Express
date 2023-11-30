import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRouters = (app) => {
    router.get("/", homeController.getHomePage);
    // router.get("/hoidanit", (req, res) => {
    //     return res.send("hoi dan it")
    // });
    //rest api
    router.get("/trung", homeController.trung);
    return app.use("/", router);
}
module.exports = initWebRouters;