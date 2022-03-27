import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import MiuRamenPrice from "../MiuRamenPrice/MiuRamenPrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  miuramenPriceUsd,
  buyMiuRamenLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    color={isHighlighted ? baseColors.warning : darkColors.text}
                    bold={false}
                  >
                    {label}
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <LogoWithTextIcon isDark width="160px" />
          </Box>
        </Flex>
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <MiuRamenPrice miuramenPriceUsd={miuramenPriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box>
            <Button
              as="a"
              href="https://spookyswap.finance/swap?inputCurrency=0x98cBAc684050ed00Ae78dC091a18d6Dd82d3a889&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyMiuRamenLabel}
            </Button>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
