// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file proto/cluster/v1/service.proto (package cluster.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message cluster.v1.JoinClusterRequest
 */
export class JoinClusterRequest extends Message<JoinClusterRequest> {
  /**
   * @generated from field: repeated string addrs = 1;
   */
  addrs: string[] = [];

  constructor(data?: PartialMessage<JoinClusterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cluster.v1.JoinClusterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "addrs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinClusterRequest {
    return new JoinClusterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinClusterRequest {
    return new JoinClusterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): JoinClusterRequest {
    return new JoinClusterRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: JoinClusterRequest | PlainMessage<JoinClusterRequest> | undefined,
    b: JoinClusterRequest | PlainMessage<JoinClusterRequest> | undefined,
  ): boolean {
    return proto3.util.equals(JoinClusterRequest, a, b);
  }
}

/**
 * @generated from message cluster.v1.JoinClusterResponse
 */
export class JoinClusterResponse extends Message<JoinClusterResponse> {
  /**
   * @generated from field: int32 size = 1;
   */
  size = 0;

  constructor(data?: PartialMessage<JoinClusterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cluster.v1.JoinClusterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinClusterResponse {
    return new JoinClusterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinClusterResponse {
    return new JoinClusterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): JoinClusterResponse {
    return new JoinClusterResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: JoinClusterResponse | PlainMessage<JoinClusterResponse> | undefined,
    b: JoinClusterResponse | PlainMessage<JoinClusterResponse> | undefined,
  ): boolean {
    return proto3.util.equals(JoinClusterResponse, a, b);
  }
}

/**
 * @generated from message cluster.v1.LeaveClusterRequest
 */
export class LeaveClusterRequest extends Message<LeaveClusterRequest> {
  constructor(data?: PartialMessage<LeaveClusterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cluster.v1.LeaveClusterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveClusterRequest {
    return new LeaveClusterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveClusterRequest {
    return new LeaveClusterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): LeaveClusterRequest {
    return new LeaveClusterRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: LeaveClusterRequest | PlainMessage<LeaveClusterRequest> | undefined,
    b: LeaveClusterRequest | PlainMessage<LeaveClusterRequest> | undefined,
  ): boolean {
    return proto3.util.equals(LeaveClusterRequest, a, b);
  }
}

/**
 * @generated from message cluster.v1.LeaveClusterResponse
 */
export class LeaveClusterResponse extends Message<LeaveClusterResponse> {
  constructor(data?: PartialMessage<LeaveClusterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cluster.v1.LeaveClusterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveClusterResponse {
    return new LeaveClusterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveClusterResponse {
    return new LeaveClusterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): LeaveClusterResponse {
    return new LeaveClusterResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: LeaveClusterResponse | PlainMessage<LeaveClusterResponse> | undefined,
    b: LeaveClusterResponse | PlainMessage<LeaveClusterResponse> | undefined,
  ): boolean {
    return proto3.util.equals(LeaveClusterResponse, a, b);
  }
}