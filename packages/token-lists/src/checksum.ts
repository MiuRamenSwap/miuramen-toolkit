import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import miuramenswapDefault from "./tokens/miuramenswap-default.json";
import miuramenswapExtended from "./tokens/miuramenswap-extended.json";
import miuramenswapTop100 from "./tokens/miuramenswap-top-100.json";
import miuramenswapTop15 from "./tokens/miuramenswap-top-15.json";

const lists = {
  "miuramenswap-default": miuramenswapDefault,
  "miuramenswap-extended": miuramenswapExtended,
  "miuramenswap-top-100": miuramenswapTop100,
  "miuramenswap-top-15": miuramenswapTop15
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
