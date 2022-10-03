import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  CircleBorder19: "rounded-radius19",
  icbCircleBorder12: "rounded-radius12",
  icbRoundedBorder3: "rounded-radius3",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillBluegray100: "bg-bluegray_100 text-bluegray_401",
  OutlineBluegray700:
    "outline outline-[0.5px] outline-bluegray_700 text-bluegray_700",
  OutlineBluegray7001_2:
    "border border-bluegray_700 border-solid text-bluegray_700",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  OutlineGray54: "bg-blue_A700 border border-gray_54 border-solid text-gray_50",
  icbFillRed400: "bg-red_400",
  icbFillBlueA200: "bg-blue_A200",
  icbFillBlueA700: "bg-blue_A700",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lg: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  smIcn: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CircleBorder19",
    "icbCircleBorder12",
    "icbRoundedBorder3",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "FillBluegray100",
    "OutlineBluegray700",
    "OutlineBluegray7001_2",
    "OutlineBlueA700",
    "OutlineGray54",
    "icbFillRed400",
    "icbFillBlueA200",
    "icbFillBlueA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillBlueA700",
  size: "md",
};

export { Button };
