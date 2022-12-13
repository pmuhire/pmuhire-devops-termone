const { Router } =require("express");

const {
     additionOperation, 
     subtractionOperation, 
     divisionOperation, 
     multiplicationOperation, 
     logarithmOperation, 
     powerOperation, 
     naturalLogarithm 
    }= require("../controllers/calculator");

const calculatorRoutes=Router();
calculatorRoutes.post("/add",additionOperation);
calculatorRoutes.post("/multiply",multiplicationOperation);
calculatorRoutes.post("/divide",divisionOperation)
calculatorRoutes.post("/subtract",subtractionOperation);
calculatorRoutes.post("/power",powerOperation);
calculatorRoutes.post("/natural",naturalLogarithm);
calculatorRoutes.post("/logarithm",logarithmOperation);

module.exports=calculatorRoutes;