import React from "react";
import iconMap, { IconName } from "../../../assets/icons/saxicon/icon-map";

const EmptyIcon = () => <div />;

export interface IconType {
  size?: number;
  color?: string;
  className?: string;
}

type Props = IconType & IconName;

const Icon = ({ name, size = 24, color = "#001529", ...rest }: Props) => {
  const Icon = iconMap[name] || EmptyIcon;
  const fontSize = size < 24 ? 24 : size;
  return (
    <Icon
      className="saxicon"
      style={{ height: size, width: size }}
      stroke={color}
      {...rest}
    />
  );
};

export default Icon;
