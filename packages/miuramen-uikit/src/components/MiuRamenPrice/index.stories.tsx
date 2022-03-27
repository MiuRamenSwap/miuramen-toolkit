import React from "react";
import { MiuRamenPrice, MiuRamenPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/MiuRamenPrice",
  component: MiuRamenPrice,
};

const Template: React.FC<MiuRamenPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <MiuRamenPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  miuramenPriceUsd: 20.0,
};
