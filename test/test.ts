import { assert } from "chai"
import { ethers } from "hardhat"
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types"

// The same
//describe("SimpleStorage",  () => {})

describe("SimpleStorage", function () {
    let simpleStorage : SimpleStorage // Add this
    let simpleStorageFac : SimpleStorage__factory // Add this
    beforeEach(async function () {
        simpleStorageFac = await ethers.getContractFactory("SimpleStorage") // If don't works ==> (await ethers.getContractFactory("SimpleStorage")) as SimpleStorage__factory
        simpleStorage = await simpleStorageFac.deploy()
    })

    it("Should start with favorite number = 0", async function () {
        const expectedVal = "0"
        const currentValue = await simpleStorage.retrieve()
        // Asset asset and expect do the same but the syntax its diferent
        assert.equal(expectedVal, currentValue.toString())
        //expect(currentValue.toString().to.equal(expectedVal))
    })

    it("should change the value to 10", async function () {
        const expectedVal2 = "10"
        const tranasactionResponse = await simpleStorage.store(10)
        tranasactionResponse.wait(1)

        const currentVal2 = await simpleStorage.retrieve()
        assert.equal(expectedVal2, currentVal2.toString())
    })
})
