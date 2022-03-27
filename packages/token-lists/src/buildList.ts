import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as miuramenswapDefaultVersion } from "../lists/miuramenswap-default.json";
import { version as miuramenswapExtendedVersion } from "../lists/miuramenswap-extended.json";
import { version as miuramenswapTop15Version } from "../lists/miuramenswap-top-15.json";
import { version as miuramenswapTop100Version } from "../lists/miuramenswap-top-100.json";
import miuramenswapDefault from "./tokens/miuramenswap-default.json";
import miuramenswapExtended from "./tokens/miuramenswap-extended.json";
import miuramenswapTop100 from "./tokens/miuramenswap-top-100.json";
import miuramenswapTop15 from "./tokens/miuramenswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "miuramenswap-default": {
    list: miuramenswapDefault,
    name: "MiuRamenSwap Default",
    keywords: ["miuramenswap", "default"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: false,
    currentVersion: miuramenswapDefaultVersion,
  },
  "miuramenswap-extended": {
    list: miuramenswapExtended,
    name: "MiuRamenSwap Extended",
    keywords: ["miuramenswap", "extended"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: miuramenswapExtendedVersion,
  },
  "miuramenswap-top-100": {
    list: miuramenswapTop100,
    name: "MiuRamenSwap Top 100",
    keywords: ["miuramenswap", "top 100"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: miuramenswapTop100Version,
  },
  "miuramenswap-top-15": {
    list: miuramenswapTop15,
    name: "MiuRamenSwap Top 15",
    keywords: ["miuramenswap", "top 15"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: miuramenswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // MIUX first in extended list
            if ((t1.symbol === "MIUX") !== (t2.symbol === "MIUX")) {
              return t1.symbol === "MIUX" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
