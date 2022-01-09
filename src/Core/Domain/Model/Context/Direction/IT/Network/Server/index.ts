import { Address } from "../IP/Address";
import { Protocol } from "../IP/Protocol";

export interface Server {
    ip: Address,
    port: number,
    protocol: Protocol
}