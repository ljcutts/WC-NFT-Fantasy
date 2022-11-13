import { BigInt } from "@graphprotocol/graph-ts";
import {
  Prediction,
  AllPredictors,
  OwnershipTransferred,
  TopPoints,
  Winners,
} from "../generated/Prediction/Prediction";
import { Predictors, TopPoint, Winner, Game } from "../generated/schema";

/*
event Winners(address winnerOne, address winnerTwo, address winnerThree);
event AllPredictors(address smartContract, address predictor);
event TopPoints(uint indexed firstHighestPoints, uint indexed secondHighestPoints, uint indexed thirdHighestPoints);
*/

export function handleAllPredictors(event: AllPredictors): void {
  // Create Predictor if it doesn't exist
  let predictor = Predictors.load(event.params.predictor);
  if (!predictor) predictor = new Predictors(event.params.predictor);

  // Save
  predictor.save();

  // Create Game Object if it doesnt exist
  let game = Game.load("0");
  if (!game) {
    game = new Game("0");
    game.gameId = new BigInt(0);
    game.gameType = "Prediction";
    game.status = false;
  }

  // Fill in the values
  game.people!.push(event.params.predictor);

  // Save
  game.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTopPoints(event: TopPoints): void {
  // Use the points to make a random ID
  const id = event.params.firstHighestPoints
    .plus(event.params.secondHighestPoints)
    .plus(event.params.thirdHighestPoints)
    .toHex();

  // Create a Top Points Object
  let topPoints = new TopPoint(id);

  // Pass in the values and save
  topPoints.top = event.params.firstHighestPoints;
  topPoints.second = event.params.secondHighestPoints;
  topPoints.third = event.params.thirdHighestPoints;

  // Save
  topPoints.save();
}

export function handleWinners(event: Winners): void {
  // ID
  const id = "0";

  // Create winners object
  let winners = new Winner(id);

  // Push in the Winners
  winners.players.push(event.params.winnerOne);
  winners.players.push(event.params.winnerTwo);
  winners.players.push(event.params.winnerThree);

  // Fill in other values
  winners.gameId = BigInt.fromString(id);
  winners.game = "Prediction";

  // -----

  // Get Game Object
  let game = Game.load(id);

  // Fill In Values
  game!.status = true;

  // Save
  game!.save();
}
