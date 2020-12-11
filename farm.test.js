//YIELD
const { getYieldForPlant, getYieldForCrop, getTotalYield } = require("./farm.js");

//COSTS
const { getCostsForCrop } = require("./farm.js");

//RENENUE
const { getRevenueForCrop } = require("./farm.js");

//PROFIT
const { getProfitForCrop, getTotalProfit } = require("./farm.js");


//Yield for plant with mulitple environment factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 0,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(9);
    });
});


//Yield for plant with environment factors
//Ignore not relevant environment factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 0,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "undefined",
    };

    test("Ignore 1 irrelevant environment factor", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

//Yield for plant with environment factors
//Ignore not relevant environment factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 0,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "undefined",
        wind: "high",
    };

    test("Ignore 1 irrelevant environment factor", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(18);
    });
});

//Yield for plant with environment factors
//Ignore all irrelevant environment factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 0,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "undefined",
        wind: "undefined",
    };

    test("Ignore all irrelevant environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });
});


//Yield for crop with environment factors
describe("getYieldForCrop", () => {
    test("Get yield for crop, with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(9);
    });
});

//Yield for crop with environment factors
//Ignore 1 irrelevant environment factor
describe("getYieldForCrop", () => {
    test("Get yield for crop, ignore 1 irrelevant environment factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "undefined",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(15);
    });
});

//Yield for crop with environment factors
//Ignore irrelevant environment factors
describe("getYieldForCrop", () => {
    test("Get yield for crop, ignore irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "undefined",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(30);
    });
});



//Total Yield with environment factors
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops && environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(6.9);
    });
});



//Total Yield with environment factors
//ignore irrelevant environment factors
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops && ignore irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "high",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(13.8);
    });
});



//Total Yield with environment factors
//ignore irrelevant environment factors
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops && ignore irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "undefined",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(11.5);
    });
});

//Total Yield with environment factors
//ignore irrelevant environment factors
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops && ignore irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "undefined",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(23);
    });
});



//Cost for Crop
describe("getCostsForCrop", () => {
    test("Calculate costs for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
});


//Revenue for Crop with environment factors
describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(18);
    });
});

//Revenue for Crop with environment factors
describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop with irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "undefined",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(30);
    });
});


//Revenue for Crop with environment factors
describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop with irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(36);
    });
});

//Revenue for Crop with environment factors
describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop with irrelevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "undefined",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(60);
    });
});


//Profit for Crop with environment factors
//Question 10
describe("getProfitForCrop", () => {
    test("Calculate profit for crop with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(8);
    });
});

//Profit for Crop with environment factors
//Question 10
describe("getProfitForCrop", () => {
    test("Calculate profit for crop with irrelevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "undefined",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(20);
    });
});


//Profit for Crop with environment factors
//Question 10
describe("getProfitForCrop", () => {
    test("Calculate profit for crop with irrelevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(26);
    });
});

//Profit for Crop with environment factors
//Question 10
describe("getProfitForCrop", () => {
    test("Calculate profit for crop with irrelevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "undefined",
        };

        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(50);
    });
});


//Total profit for multiple Crops
//Question 4
describe("getTotalProfit", () => {
    test("Calculate total profit for multiple crops with (ir)relevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        const crops = [
            { crop: corn, numCrops: 10, cost: 1, salePrice: 2 },
            { crop: pumpkin, numCrops: 10, cost: 1, salePrice: 3 },
        ];
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(34);
    });
});



//Total profit for multiple Crops
//Question 4
describe("getTotalProfit", () => {
    test("Calculate total profit for multiple crops with (ir)relevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "undefined",
        };

        const crops = [
            { crop: corn, numCrops: 10, cost: 1, salePrice: 2 },
            { crop: pumpkin, numCrops: 10, cost: 1, salePrice: 3 },
        ];
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(70);
    });
});



//Total profit for multiple Crops
//Question 4
describe("getTotalProfit", () => {
    test("Calculate total profit for multiple crops with (ir)relevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "high",
        };

        const crops = [
            { crop: corn, numCrops: 10, cost: 1, salePrice: 2 },
            { crop: pumpkin, numCrops: 10, cost: 1, salePrice: 3 },
        ];
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(88);
    });
});



//Total profit for multiple Crops
//Question 4
describe("getTotalProfit", () => {
    test("Calculate total profit for multiple crops with (ir)relevant invironment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: -40,
                },
            },
        };

        const environmentFactors = {
            sun: "undefined",
            wind: "undefined",
        };

        const crops = [
            { crop: corn, numCrops: 10, cost: 1, salePrice: 2 },
            { crop: pumpkin, numCrops: 10, cost: 1, salePrice: 3 },
        ];
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(160);
    });
});

