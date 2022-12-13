
exports.additionOperation = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne, numTwo } = req.body;
        const result = numOne + numTwo;
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }

}

exports.subtractionOperation = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne, numTwo } = req.body;
        const result = numOne - numTwo;
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

exports.divisionOperation = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne, numTwo } = req.body;
        const result = numOne / numTwo;
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

exports.multiplicationOperation = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne, numTwo } = req.body;
        const result = numOne * numTwo;
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

exports.powerOperation = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne, numTwo } = req.body;
        const result = numOne ** numTwo;
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

exports.logarithmOperation = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne, numTwo } = req.body;
        const result =  Math.log(numOne) / Math.log(numTwo);
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}
exports.naturalLogarithm = async (req, res) => {
    try {
        console.log(req.body);
        const { numOne } = req.body;
        const result =  Math.log(numOne);
        console.log(result);
        return res.status(201).json({
            success: true,
            status: 201,
            message: "Operation successfuly completed",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}