import React from "react";
import styled from "styled-components";
import { MiuRamenRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  miuramenPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const MiuRamenPrice: React.FC<Props> = ({ miuramenPriceUsd, color = "textSubtle" }) => {
  return miuramenPriceUsd ? (
    <PriceLink
      href="https://spookyswap.finance/swap?inputCurrency=0x98cBAc684050ed00Ae78dC091a18d6Dd82d3a889&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
      target="_blank"
    >
      <MiuRamenRoundIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${miuramenPriceUsd.toFixed(10)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(MiuRamenPrice);
