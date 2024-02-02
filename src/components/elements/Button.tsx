"use client";

import {
  Button,
  MantineColor,
  MantineRadius,
  MantineSize,
} from "@mantine/core";

type ButtonType = {
  children: React.ReactNode;
  variant?: string;
  color?: MantineColor;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: MantineRadius | number;
  rightSection?: React.ReactNode;
  size?:
    | MantineSize
    | "compact-xs"
    | "compact-sm"
    | "compact-md"
    | "compact-lg"
    | "compact-xl";
  className?: string;
};

export default function BaseButton({
  children,
  variant = "filled",
  ...rest
}: ButtonType) {
  return <Button {...rest}>{children}</Button>;
}
