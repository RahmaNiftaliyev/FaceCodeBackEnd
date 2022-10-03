import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBluegray300:
    "bg-white_A700 border border-bluegray_300 border-solid",
  srcFillBluegray50: "bg-bluegray_50",
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  FillBlue50: "bg-blue_50",
};
const shapes = {
  srcRoundedBorder6: "rounded-radius6",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  CustomBorderLR50:
    "rounded-bl-[0] rounded-br-[50px] rounded-tl-[0] rounded-tr-[50px]",
};
const sizes = {
  smSrc: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  mdSrc: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  lgSrc: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  sm: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  md: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  lg: "lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px]",
  xl: "lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder6",
    "RoundedBorder8",
    "RoundedBorder4",
    "CustomBorderLR50",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray300",
    "srcFillBluegray50",
    "UnderLineBluegray100",
    "OutlineBluegray100",
    "FillBlue50",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "lgSrc", "sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcOutlineBluegray300",
  size: "mdSrc",
};

export { Input };
