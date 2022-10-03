import React from "react";

import { Column, Row, Img, Input, Text, Button, Line, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ImageManagementPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] shadow-bs w-[100%]">
            <Img
              src="images/img_group_3.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[52px] 3xl:ml-[62px] flex lg:ml-[40px] w-[35%] xl:ml-[46px]"
              name="InputField"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[4px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#bac1ce"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder6"
              size="lgSrc"
            ></Input>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Products
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Resouces
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[1%]"
              alt="arrowdown One"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Request a demo
            </Text>
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
              alt="ProfileImgLarg"
            />
          </Row>
        </header>
        <Column className="justify-end lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[66%]">
          <Row className="items-center mr-[auto] w-[34%]">
            <Img
              src="images/img_ellipse46.png"
              className="lg:h-[147px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] rounded-radius50 lg:w-[146px] xl:w-[167px] 2xl:w-[188px] 3xl:w-[225px]"
              alt="EllipseFortySix"
            />
            <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] w-[33%]">
              <Text className="font-semibold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_900 w-[auto]">
                #nature
              </Text>
              <Text className="font-semibold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                <span className="text-colors font-gilroy lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  38.5M
                </span>
                <span className="text-colors font-gilroy"> </span>
                <span className="text-colors1 font-gilroy font-medium">
                  posts
                </span>
              </Text>
              <Button className="font-medium lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]">
                Follow
              </Button>
            </Column>
          </Row>
          <Row className="mr-[auto] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[14%]">
            <Column className="items-center mt-[1px] w-[61%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                Top
              </Text>
              <Line className="bg-blue_A700 h-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[58%]" />
            </Column>
            <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
              Recent
            </Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
              <Img
                src="images/img_rectangle10_296X296.png"
                className="lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[230px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                alt="RectangleTen"
              />
              <Img
                src="images/img_rectangle11_296X296.png"
                className="lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[230px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                alt="RectangleEleven"
              />
              <Img
                src="images/img_rectangle13_296X296.png"
                className="lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[230px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                alt="RectangleThirteen"
              />
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
              <Img
                src="images/img_rectangle14_296X296.png"
                className="lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[230px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                alt="RectangleFourteen"
              />
              <Img
                src="images/img_rectangle15.png"
                className="lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[230px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                alt="RectangleFifteen"
              />
              <Img
                src="images/img_rectangle16.png"
                className="lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[230px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                alt="RectangleSixteen"
              />
            </Row>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default ImageManagementPage;
