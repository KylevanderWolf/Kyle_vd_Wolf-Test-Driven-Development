//YIELD
const { getYieldForPlant, getYieldForCrop, getTotalYield } = require("./farm.js");

//COSTS
const { getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm.js");


//yield for plant
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});


//Yield for crop
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});


//Total Yield
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
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


//Revenue for Crop
describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getRevenueForCrop(input)).toBe(60);
    });
});

//Profit for Crop
describe("getProfitForCrop", () => {
    test("Calculate profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getProfitForCrop(input)).toBe(50);
    });
});


//Total profit for multiple Crops
describe("getTotalProfit", () => {
    test("Calculate total profit for multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 10, cost: 1, salePrice: 2 },
            { crop: pumpkin, numCrops: 10, cost: 1, salePrice: 3 },
        ];
        expect(getTotalProfit({ crops })).toBe(160);
    });
});