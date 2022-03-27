import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getMiuRamenProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getMiuRamenProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.miuramenProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getMiuRamenProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.miuramenProfile[TESTNET_CHAIN_ID]);
  });
});
