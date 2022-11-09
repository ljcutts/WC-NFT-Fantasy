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

export class FetchTeamsTwoOwnershipTransferred extends ethereum.Event {
  get params(): FetchTeamsTwoOwnershipTransferred__Params {
    return new FetchTeamsTwoOwnershipTransferred__Params(this);
  }
}

export class FetchTeamsTwoOwnershipTransferred__Params {
  _event: FetchTeamsTwoOwnershipTransferred;

  constructor(event: FetchTeamsTwoOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FetchTeamsTwo extends ethereum.SmartContract {
  static bind(address: Address): FetchTeamsTwo {
    return new FetchTeamsTwo("FetchTeamsTwo", address);
  }

  getEighthPlaceTeam(): Bytes {
    let result = super.call(
      "getEighthPlaceTeam",
      "getEighthPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_getEighthPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getEighthPlaceTeam",
      "getEighthPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getFifthPlaceTeam(): Bytes {
    let result = super.call(
      "getFifthPlaceTeam",
      "getFifthPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_getFifthPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getFifthPlaceTeam",
      "getFifthPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getSeventhPlaceTeam(): Bytes {
    let result = super.call(
      "getSeventhPlaceTeam",
      "getSeventhPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_getSeventhPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getSeventhPlaceTeam",
      "getSeventhPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getSixthPlaceTeam(): Bytes {
    let result = super.call(
      "getSixthPlaceTeam",
      "getSixthPlaceTeam():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_getSixthPlaceTeam(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getSixthPlaceTeam",
      "getSixthPlaceTeam():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

export class SetEigthPlaceTeamCall extends ethereum.Call {
  get inputs(): SetEigthPlaceTeamCall__Inputs {
    return new SetEigthPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetEigthPlaceTeamCall__Outputs {
    return new SetEigthPlaceTeamCall__Outputs(this);
  }
}

export class SetEigthPlaceTeamCall__Inputs {
  _call: SetEigthPlaceTeamCall;

  constructor(call: SetEigthPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetEigthPlaceTeamCall__Outputs {
  _call: SetEigthPlaceTeamCall;

  constructor(call: SetEigthPlaceTeamCall) {
    this._call = call;
  }
}

export class SetFifthPlaceTeamCall extends ethereum.Call {
  get inputs(): SetFifthPlaceTeamCall__Inputs {
    return new SetFifthPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetFifthPlaceTeamCall__Outputs {
    return new SetFifthPlaceTeamCall__Outputs(this);
  }
}

export class SetFifthPlaceTeamCall__Inputs {
  _call: SetFifthPlaceTeamCall;

  constructor(call: SetFifthPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFifthPlaceTeamCall__Outputs {
  _call: SetFifthPlaceTeamCall;

  constructor(call: SetFifthPlaceTeamCall) {
    this._call = call;
  }
}

export class SetSeventhPlaceTeamCall extends ethereum.Call {
  get inputs(): SetSeventhPlaceTeamCall__Inputs {
    return new SetSeventhPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetSeventhPlaceTeamCall__Outputs {
    return new SetSeventhPlaceTeamCall__Outputs(this);
  }
}

export class SetSeventhPlaceTeamCall__Inputs {
  _call: SetSeventhPlaceTeamCall;

  constructor(call: SetSeventhPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSeventhPlaceTeamCall__Outputs {
  _call: SetSeventhPlaceTeamCall;

  constructor(call: SetSeventhPlaceTeamCall) {
    this._call = call;
  }
}

export class SetSixthPlaceTeamCall extends ethereum.Call {
  get inputs(): SetSixthPlaceTeamCall__Inputs {
    return new SetSixthPlaceTeamCall__Inputs(this);
  }

  get outputs(): SetSixthPlaceTeamCall__Outputs {
    return new SetSixthPlaceTeamCall__Outputs(this);
  }
}

export class SetSixthPlaceTeamCall__Inputs {
  _call: SetSixthPlaceTeamCall;

  constructor(call: SetSixthPlaceTeamCall) {
    this._call = call;
  }

  get _teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSixthPlaceTeamCall__Outputs {
  _call: SetSixthPlaceTeamCall;

  constructor(call: SetSixthPlaceTeamCall) {
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
