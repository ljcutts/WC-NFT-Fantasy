// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FetchTeamsThreeOwnershipTransferred extends ethereum.Event {
  get params(): FetchTeamsThreeOwnershipTransferred__Params {
    return new FetchTeamsThreeOwnershipTransferred__Params(this);
  }
}

export class FetchTeamsThreeOwnershipTransferred__Params {
  _event: FetchTeamsThreeOwnershipTransferred;

  constructor(event: FetchTeamsThreeOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FetchTeamsThree extends ethereum.SmartContract {
  static bind(address: Address): FetchTeamsThree {
    return new FetchTeamsThree("FetchTeamsThree", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setAddress(): Address {
    let result = super.call("setAddress", "setAddress():(address)", []);

    return result[0].toAddress();
  }

  try_setAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("setAddress", "setAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setEleventhPlaceTeam(): Bytes {
    let result = super.call(
      "setEleventhPlaceTeam",
      "setEleventhPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_setEleventhPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "setEleventhPlaceTeam",
      "setEleventhPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  setNinthPlaceTeam(): Bytes {
    let result = super.call(
      "setNinthPlaceTeam",
      "setNinthPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_setNinthPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "setNinthPlaceTeam",
      "setNinthPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  setTenthPlaceTeam(): Bytes {
    let result = super.call(
      "setTenthPlaceTeam",
      "setTenthPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_setTenthPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "setTenthPlaceTeam",
      "setTenthPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  setTwelfthPlaceTeam(): Bytes {
    let result = super.call(
      "setTwelfthPlaceTeam",
      "setTwelfthPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_setTwelfthPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "setTwelfthPlaceTeam",
      "setTwelfthPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _setAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetEleventhPlaceTeamCall extends ethereum.Call {
  get inputs(): SetEleventhPlaceTeamCall__Inputs {
    return new SetEleventhPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetEleventhPlaceTeamCall__Outputs {
    return new SetEleventhPlaceTeamCall__Outputs(this);
  }
}

export class SetEleventhPlaceTeamCall__Inputs {
  _call: SetEleventhPlaceTeamCall;

  constructor(call: SetEleventhPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetEleventhPlaceTeamCall__Outputs {
  _call: SetEleventhPlaceTeamCall;

  constructor(call: SetEleventhPlaceTeamCall) {
    this._call = call;
  }
}

export class SetNinthPlaceTeamCall extends ethereum.Call {
  get inputs(): SetNinthPlaceTeamCall__Inputs {
    return new SetNinthPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetNinthPlaceTeamCall__Outputs {
    return new SetNinthPlaceTeamCall__Outputs(this);
  }
}

export class SetNinthPlaceTeamCall__Inputs {
  _call: SetNinthPlaceTeamCall;

  constructor(call: SetNinthPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNinthPlaceTeamCall__Outputs {
  _call: SetNinthPlaceTeamCall;

  constructor(call: SetNinthPlaceTeamCall) {
    this._call = call;
  }
}

export class SetTenthPlaceTeamCall extends ethereum.Call {
  get inputs(): SetTenthPlaceTeamCall__Inputs {
    return new SetTenthPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetTenthPlaceTeamCall__Outputs {
    return new SetTenthPlaceTeamCall__Outputs(this);
  }
}

export class SetTenthPlaceTeamCall__Inputs {
  _call: SetTenthPlaceTeamCall;

  constructor(call: SetTenthPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTenthPlaceTeamCall__Outputs {
  _call: SetTenthPlaceTeamCall;

  constructor(call: SetTenthPlaceTeamCall) {
    this._call = call;
  }
}

export class SetTwelfthPlaceTeamCall extends ethereum.Call {
  get inputs(): SetTwelfthPlaceTeamCall__Inputs {
    return new SetTwelfthPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetTwelfthPlaceTeamCall__Outputs {
    return new SetTwelfthPlaceTeamCall__Outputs(this);
  }
}

export class SetTwelfthPlaceTeamCall__Inputs {
  _call: SetTwelfthPlaceTeamCall;

  constructor(call: SetTwelfthPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTwelfthPlaceTeamCall__Outputs {
  _call: SetTwelfthPlaceTeamCall;

  constructor(call: SetTwelfthPlaceTeamCall) {
    this._call = call;
  }
}

export class SetWorldCupDataAddressCall extends ethereum.Call {
  get inputs(): SetWorldCupDataAddressCall__Inputs {
    return new SetWorldCupDataAddressCall__Inputs(this);
  }

  get outputs(): SetWorldCupDataAddressCall__Outputs {
    return new SetWorldCupDataAddressCall__Outputs(this);
  }
}

export class SetWorldCupDataAddressCall__Inputs {
  _call: SetWorldCupDataAddressCall;

  constructor(call: SetWorldCupDataAddressCall) {
    this._call = call;
  }

  get _worldCupDataAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetWorldCupDataAddressCall__Outputs {
  _call: SetWorldCupDataAddressCall;

  constructor(call: SetWorldCupDataAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
