import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  HelpingAdded,
  HelpingRemoved,
  OwnershipTransferred,
  PremiumIncreased
} from "../generated/SpicyCombos/SpicyCombos"

export function createHelpingAddedEvent(
  comboId: BigInt,
  owner: Address,
  usingCredits: boolean,
  doubleHelping: boolean,
  premium: BigInt
): HelpingAdded {
  let helpingAddedEvent = changetype<HelpingAdded>(newMockEvent())

  helpingAddedEvent.parameters = new Array()

  helpingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "comboId",
      ethereum.Value.fromUnsignedBigInt(comboId)
    )
  )
  helpingAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  helpingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "usingCredits",
      ethereum.Value.fromBoolean(usingCredits)
    )
  )
  helpingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "doubleHelping",
      ethereum.Value.fromBoolean(doubleHelping)
    )
  )
  helpingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "premium",
      ethereum.Value.fromUnsignedBigInt(premium)
    )
  )

  return helpingAddedEvent
}

export function createHelpingRemovedEvent(
  comboId: BigInt,
  owner: Address
): HelpingRemoved {
  let helpingRemovedEvent = changetype<HelpingRemoved>(newMockEvent())

  helpingRemovedEvent.parameters = new Array()

  helpingRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "comboId",
      ethereum.Value.fromUnsignedBigInt(comboId)
    )
  )
  helpingRemovedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return helpingRemovedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPremiumIncreasedEvent(
  comboId: BigInt,
  owner: Address,
  newPremium: BigInt
): PremiumIncreased {
  let premiumIncreasedEvent = changetype<PremiumIncreased>(newMockEvent())

  premiumIncreasedEvent.parameters = new Array()

  premiumIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "comboId",
      ethereum.Value.fromUnsignedBigInt(comboId)
    )
  )
  premiumIncreasedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  premiumIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "newPremium",
      ethereum.Value.fromUnsignedBigInt(newPremium)
    )
  )

  return premiumIncreasedEvent
}
