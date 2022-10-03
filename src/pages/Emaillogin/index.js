import React from "react";

import { Column, Row, Img, Text, Button, Input } from "components";

const EmailloginPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_12.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[13%]"
              alt="Group10392"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[221px] xl:ml-[253px] 2xl:ml-[285px] 3xl:ml-[342px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Products
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Resouces
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[1%]"
              alt="arrowdown One"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Request a demo
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Sign in
            </Text>
            <Button
              className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
              size="lg"
            >
              Sign up for free
            </Button>
          </Row>
        </header>
        <Text className="font-semibold lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
          Sign in to Recharge Direct
        </Text>
        <Column className="lg:mb-[365px] xl:mb-[418px] 2xl:mb-[470px] 3xl:mb-[564px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[37%]">
          <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Email
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
            name="Group10198"
            placeholder="Enter Your emai"
            shape="RoundedBorder8"
            size="sm"
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Password
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
            type="password"
            name="Group10265"
            placeholder="Enter Your Password"
            suffix={
              <Img
                src="images/img_eye.svg"
                className="mr-[2px] lg:w-[12px] lg:ml-[27px] xl:w-[14px] xl:ml-[31px] 2xl:w-[16px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:ml-[42px] my-[auto]"
                alt="eye"
              />
            }
            shape="RoundedBorder8"
            size="sm"
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-medium lg:ml-[283px] xl:ml-[324px] 2xl:ml-[365px] 3xl:ml-[438px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
            Forgot Password?
          </Text>
          <Button
            className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
            size="lg"
          >
            Submit
          </Button>
          <Text className="font-medium lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            <span className="text-colors font-gilroy">
              If you don't an account you can{" "}
            </span>
            <span className="text-colors2 font-gilroy font-semibold">
              Register here!
            </span>
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default EmailloginPage;
