import React from "react";

import { Column, Row, Img, Text, Button, Input, TextArea } from "components";

const ContactUsPage = () => {
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_10.svg"
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
        <Row className="lg:mb-[280px] xl:mb-[321px] 2xl:mb-[361px] 3xl:mb-[433px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[82%]">
          <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] pb-[2px] pr-[2px] w-[54%]">
            <Text className="font-semibold lg:leading-[40px] xl:leading-[46px] 2xl:leading-[52px] 3xl:leading-[62px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[76%]">
              Got any quieries? Chat with our team.
            </Text>
            <Text className="font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Address
            </Text>
            <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_700 w-[80%]">
              4517 Washington Ave. Manchester, Kentucky Thornridge Cir.
              Syracuse, 39495{" "}
            </Text>
            <Row className="ml-[2px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[32%]">
              <Img
                src="images/img_vector_bluegray_700.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[10%]"
                alt="Vector"
              />
              <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                contact@gmail.com
              </Text>
            </Row>
            <Row className="items-center ml-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[27%]">
              <Img
                src="images/img_call_19X19.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                alt="call"
              />
              <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                +91 01234567890
              </Text>
            </Row>
            <Row className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[22%]">
              <Img
                src="images/img_vector_bluegray_700_20X11.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[8%]"
                alt="Vector One"
              />
              <Img
                src="images/img_play.svg"
                className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[2px] w-[16%]"
                alt="play"
              />
              <Img
                src="images/img_linkedin.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[15%]"
                alt="linkedin"
              />
              <Img
                src="images/img_twitter_17X22.svg"
                className="common-pointer lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[16%]"
                onClick={handleNavigate1}
                alt="twitter"
              />
            </Row>
          </Column>
          <Column className="pt-[3px] w-[46%]">
            <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Mobile Number
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
              type="number"
              name="Group10198"
              placeholder="Enter Your Number"
              shape="RoundedBorder8"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Email
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
              type="email"
              name="Group10198 One"
              placeholder="Enter Your Email"
              shape="RoundedBorder8"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Company name
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="mt-[4px] w-[100%]"
              name="Group10198 Two"
              placeholder="Enter Company"
              shape="RoundedBorder8"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Message
            </Text>
            <TextArea
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              name="Group10199"
              placeholder="Message.."
            ></TextArea>
            <Button
              className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              size="lg"
            >
              Submit
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ContactUsPage;
