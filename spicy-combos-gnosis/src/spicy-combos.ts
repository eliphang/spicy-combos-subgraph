import {
  HelpingAdded as HelpingAddedEvent,
  HelpingRemoved as HelpingRemovedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PremiumIncreased as PremiumIncreasedEvent
} from "../generated/SpicyCombos/SpicyCombos"
import {
  HelpingAdded,
  HelpingRemoved,
  OwnershipTransferred,
  PremiumIncreased
} from "../generated/schema"

export function handleHelpingAdded(event: HelpingAddedEvent): void {
  let entity = new HelpingAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.comboId = event.params.comboId
  entity.owner = event.params.owner
  entity.usingCredits = event.params.usingCredits
  entity.doubleHelping = event.params.doubleHelping
  entity.premium = event.params.premium

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHelpingRemoved(event: HelpingRemovedEvent): void {
  let entity = new HelpingRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.comboId = event.params.comboId
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePremiumIncreased(event: PremiumIncreasedEvent): void {
  let entity = new PremiumIncreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.comboId = event.params.comboId
  entity.owner = event.params.owner
  entity.newPremium = event.params.newPremium

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
