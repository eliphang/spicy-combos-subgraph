import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { HelpingAdded } from "../generated/schema"
import { HelpingAdded as HelpingAddedEvent } from "../generated/SpicyCombos/SpicyCombos"
import { handleHelpingAdded } from "../src/spicy-combos"
import { createHelpingAddedEvent } from "./spicy-combos-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let comboId = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let usingCredits = "boolean Not implemented"
    let doubleHelping = "boolean Not implemented"
    let premium = BigInt.fromI32(234)
    let newHelpingAddedEvent = createHelpingAddedEvent(
      comboId,
      owner,
      usingCredits,
      doubleHelping,
      premium
    )
    handleHelpingAdded(newHelpingAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("HelpingAdded created and stored", () => {
    assert.entityCount("HelpingAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "HelpingAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "comboId",
      "234"
    )
    assert.fieldEquals(
      "HelpingAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "HelpingAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "usingCredits",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "HelpingAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "doubleHelping",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "HelpingAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "premium",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
