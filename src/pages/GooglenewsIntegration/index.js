import React from "react";

import { Column, Row, Img, Input, Stack, Text, Line, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const GooglenewsIntegrationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:pb-[112px] xl:pb-[128px] 2xl:pb-[144px] 3xl:pb-[172px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_group_21.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[101px] 3xl:ml-[121px] flex lg:ml-[78px] w-[29%] xl:ml-[89px]"
              name="InputField"
              placeholder="Search "
              prefix={
                <Img
                  src="images/img_search_black_900.svg"
                  className="cursor-pointer ml-[0] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
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
            ></Input>
            <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[373px] xl:ml-[427px] 2xl:ml-[480px] 3xl:ml-[576px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
              <Img
                src="images/img_notification.svg"
                className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[38%]"
                alt="notification"
              />
              <Text className="absolute bg-red_700 border border-bluegray_50 border-solid flex font-semibold items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 top-[2%] w-[18px]">
                2
              </Text>
            </Stack>
            <Column className="border border-blue_A701 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
              <Img
                src="images/img_profileimglarg.png"
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                alt="ProfileImgLarg"
              />
            </Column>
          </Row>
        </header>
        <Row className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[91%]">
          <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[19px] 3xl:pr-[22px] w-[30%]">
            <Img
              src="images/img_googlenews201.png"
              className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[41%]"
              alt="GoogleNews201"
            />
            <Input
              className="font-semibold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
              wrapClassName="2xl:mr-[117px] 2xl:mt-[35px] 3xl:mr-[140px] 3xl:mt-[42px] flex lg:mr-[91px] lg:mt-[27px] w-[68%] xl:mr-[104px] xl:mt-[31px]"
              name="Frame257"
              placeholder="Top Stories"
              prefix={
                <Img
                  src="images/img_globe.svg"
                  className="lg:w-[15px] lg:h-[16px] lg:mx-[7px] xl:w-[17px] xl:h-[18px] xl:mx-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mx-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mx-[12px] my-[auto]"
                  alt="globe"
                />
              }
              shape="CustomBorderLR50"
              size="md"
              variant="FillBlue50"
            ></Input>
            <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[23%]">
              <Img
                src="images/img_user_20X19.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[23%]"
                alt="user"
              />
              <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                For you
              </Text>
            </Row>
            <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[27%]">
              <Img
                src="images/img_mail.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[20%]"
                alt="mail"
              />
              <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Following
              </Text>
            </Row>
            <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[40%]">
              <Img
                src="images/img_computer_18X20.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[14%]"
                alt="computer"
              />
              <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                News Showcase
              </Text>
            </Row>
            <Row className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[41%]">
              <Img
                src="images/img_search_bluegray_700.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="search"
              />
              <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Saved Searches
              </Text>
            </Row>
            <Row className="items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[19%]">
              <Img
                src="images/img_lock_16X24.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] w-[34%]"
                alt="lock"
              />
              <Text className="font-semibold mb-[1px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                India
              </Text>
            </Row>
            <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[20%]">
              <Img
                src="images/img_globe_19X19.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                alt="globe One"
              />
              <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                World
              </Text>
            </Row>
          </Column>
          <Column className="w-[70%]">
            <Input
              value={inputvalue1}
              onChange={(e) => setInputvalue1(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="flex w-[54%]"
              name="InputField One"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search_black_900.svg"
                  className="cursor-pointer ml-[4px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue1?.length > 0 ? (
                  <CloseSVG
                    color="#bac1ce"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue1("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder6"
              size="lgSrc"
            ></Input>
            <Row className="justify-evenly lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[64%]">
                <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  Headlines
                </Text>
                <Row className="items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[87%]">
                  <Column className="mb-[2px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[98%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_900 w-[auto]">
                      Samsung Galaxy F22 launched in India
                    </Text>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[60%]">
                      Samsung Galaxy F22 has been launched in India. The new
                      smartphone has been priced in the mid-range segment.
                    </Text>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      15 mins ago
                    </Text>
                  </Column>
                  <Img
                    src="images/img_group9848.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] xl:mt-[102px] 2xl:mt-[115px] 3xl:mt-[138px] lg:mt-[89px] w-[2%]"
                    alt="Group9848"
                  />
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]" />
                <Row className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] w-[87%]">
                  <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[77%]">
                    <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_900 w-[65%]">
                      Battlegrounds Mobile India iOS release date
                    </Text>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[66%]">
                      The reason behind their disappointment is that iPhone
                      users have been..
                    </Text>
                  </Column>
                  <Img
                    src="images/img_rectangle19.png"
                    className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] mb-[1px] rounded-radius4 w-[23%]"
                    alt="RectangleNineteen"
                  />
                </Row>
                <Row className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    15 mins ago
                  </Text>
                  <Img
                    src="images/img_upload.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[332px] xl:ml-[379px] 2xl:ml-[427px] 3xl:ml-[512px] w-[2%]"
                    alt="upload"
                  />
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]" />
                <Row className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]">
                  <Column className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[77%]">
                    <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_900 w-[66%]">
                      Instagram working on ‘Exclusive Stories’ for subscribers
                    </Text>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[65%]">
                      Instagram could be jumping on the paid subscription..
                    </Text>
                  </Column>
                  <Img
                    src="images/img_rectangle16.png"
                    className="2xl:h-[107px] 3xl:h-[128px] lg:h-[83px] xl:h-[95px] rounded-radius4 w-[23%]"
                    alt="RectangleSixteen"
                  />
                </Row>
                <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[87%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    15 mins ago
                  </Text>
                  <Img
                    src="images/img_upload.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[332px] xl:ml-[379px] 2xl:ml-[427px] 3xl:ml-[512px] w-[2%]"
                    alt="upload One"
                  />
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]" />
                <Row className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]">
                  <Column className="mb-[2px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[97%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_900 w-[auto]">
                      Samsung Galaxy F22 launched in India
                    </Text>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[60%]">
                      Samsung Galaxy F22 has been launched in India. The new
                      smartphone has been priced in the mid-range segment.
                    </Text>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      15 mins ago
                    </Text>
                  </Column>
                  <Img
                    src="images/img_upload.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] xl:mt-[102px] 2xl:mt-[115px] 3xl:mt-[138px] lg:mt-[89px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                    alt="upload Two"
                  />
                </Row>
              </Column>
              <Column className="w-[36%]">
                <Row className="items-center ml-[1px] w-[90%]">
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray700"
                  >
                    Life and management
                  </Button>
                  <Button
                    className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[27%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray700"
                  >
                    Health
                  </Button>
                </Row>
                <Row className="items-center ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[90%]">
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[35%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray700"
                  >
                    Parenting
                  </Button>
                  <Button
                    className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[26%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    World
                  </Button>
                  <Button
                    className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[27%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    Sports
                  </Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[36%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    Accessories
                  </Button>
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    India
                  </Button>
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[33%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    Bollywood
                  </Button>
                </Row>
                <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[77%]">
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[46%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    Automobile
                  </Button>
                  <Button
                    className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    shape="CircleBorder19"
                    variant="OutlineBluegray7001_2"
                  >
                    Productivity
                  </Button>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default GooglenewsIntegrationPage;
