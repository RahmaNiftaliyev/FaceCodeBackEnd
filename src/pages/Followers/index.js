import React from "react";

import { Column, Row, Img, Text, Input, Grid, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FollowersPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[93%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_39.svg"
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
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[304px] xl:ml-[348px] 2xl:ml-[392px] 3xl:ml-[470px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
              alt="ProfileImgLarg"
            />
          </Row>
        </header>
        <Row className="items-center justify-end lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] w-[93%]">
          <Img
            src="images/img_arrowleft.svg"
            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[1%]"
            alt="arrowleft"
          />
          <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
            Followers
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:ml-[622px] 3xl:ml-[746px] flex lg:ml-[483px] w-[39%] xl:ml-[553px]"
            name="Group10337"
            placeholder="Search Friends"
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer mr-[0] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                  onClick={() => setInputvalue("")}
                  color="#bac1ce"
                />
              ) : (
                <Img
                  src="images/img_search_blue_A200.svg"
                  className="cursor-pointer mr-[0] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                  alt="search"
                />
              )
            }
            shape="srcRoundedBorder6"
            size="lgSrc"
          ></Input>
        </Row>
        <Grid className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-3 lg:mb-[168px] xl:mb-[192px] 2xl:mb-[216px] 3xl:mb-[259px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[93%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg One"
            />
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Rose J. Henry
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_1.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[3px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Two"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Kai Caudle
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_9.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Three"
            />
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Carmelo Rousseau
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_2.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Four"
            />
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Ali Comer
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_3.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[3px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Five"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Jacklyn Kovach
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_4.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Six"
            />
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Landon Mosby
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_5.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Seven"
            />
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Man Marin
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_6.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[3px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Eight"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Benito Nickel
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_7.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Nine"
            />
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Angelyn Weiner
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Ten"
            />
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Rose J. Henry
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_1.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[3px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Eleven"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Kai Caudle
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_9.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Twelve"
            />
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Carmelo Rousseau
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_2.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Thirteen"
            />
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Ali Comer
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_3.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[3px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Fourteen"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Jacklyn Kovach
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_4.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Fifteen"
            />
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Landon Mosby
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_5.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Sixteen"
            />
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Man Marin
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_6.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[3px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Seventeen"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Benito Nickel
              </Text>
              <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid justify-evenly 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_7.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Eighteen"
            />
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] pr-[2px] w-[55%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Angelyn Weiner
              </Text>
              <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[72%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  New York
                </Text>
                <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20 min ago
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
              size="lg"
            >
              Follow
            </Button>
          </Row>
        </Grid>
      </Column>
    </>
  );
};

export default FollowersPage;
