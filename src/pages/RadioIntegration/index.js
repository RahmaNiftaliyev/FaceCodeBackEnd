import React from "react";

import { Column, Row, Img, Input, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const RadioIntegrationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] shadow-bs w-[100%]">
            <Img
              src="images/img_group_17.svg"
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
                  src="images/img_search_black_900.svg"
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
        <Row className="w-[88%]">
          <Column className="items-end lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[66%]">
            <Row className="items-center pb-[1px] pr-[1px] w-[95%]">
              <Img
                src="images/img_arrowleft.svg"
                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                alt="arrowleft"
              />
              <Text className="font-semibold lg:ml-[248px] xl:ml-[284px] 2xl:ml-[320px] 3xl:ml-[384px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                RedFM 93.5
              </Text>
              <Img
                src="images/img_morevertical.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[252px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] w-[2px]"
                alt="morevertical"
              />
            </Row>
            <Img
              src="images/img_rectangle1224.png"
              className="lg:h-[396px] xl:h-[453px] 2xl:h-[510px] 3xl:h-[612px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius6 w-[96%]"
              alt="Rectangle1224"
            />
            <Row className="items-center lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[96%]">
              <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_802 w-[auto]">
                Tere Jaisa Yaar Kahan...
              </Text>
              <Img
                src="images/img_favorite.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[400px] xl:ml-[458px] 2xl:ml-[515px] 3xl:ml-[618px] w-[3%]"
                alt="favorite"
              />
            </Row>
            <Img
              src="images/img_group1443.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]"
              alt="Group1443"
            />
            <Row className="items-center lg:mr-[24px] xl:mr-[27px] 2xl:mr-[31px] 3xl:mr-[37px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[96%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                04:10
              </Text>
              <Text className="font-medium lg:ml-[567px] xl:ml-[648px] 2xl:ml-[729px] 3xl:ml-[875px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                09:00
              </Text>
            </Row>
            <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[95%]">
              <Img
                src="images/img_vector_blue_A701.svg"
                className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_blue_A701_24X26.svg"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[215px] xl:ml-[246px] 2xl:ml-[277px] 3xl:ml-[332px] w-[3%]"
                alt="Vector One"
              />
              <Img
                src="images/img_vector_blue_A701_58X58.svg"
                className="lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] mb-[1px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:w-[45px] xl:w-[51px] 2xl:w-[58px] 3xl:w-[69px]"
                alt="Vector Two"
              />
              <Img
                src="images/img_vector_24X26.svg"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[3%]"
                alt="Vector Three"
              />
              <Img
                src="images/img_cut_26X26.svg"
                className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[215px] xl:ml-[246px] 2xl:ml-[277px] 3xl:ml-[332px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                alt="cut"
              />
            </Row>
          </Column>
          <Line className="bg-bluegray_100 3xl:h-[1177px] lg:h-[763px] xl:h-[872px] 2xl:h-[981px] w-[1px]" />
          <Column className="justify-end lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[31%]">
            <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              Popular Now
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]"
              orientation="vertical"
            >
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty"
                />
                <Column className="mt-[4px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Hum Nashe Mein Toh Nahin
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    03:28
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    Pritam, Arijit Singh, Tulsi Kumar
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_78X78.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty One"
                />
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Chaand Baaliyan Song
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    01:43
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    Aditya A
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
            </List>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]"
              orientation="vertical"
            >
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_1.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Two"
                />
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Gehraiyaan Title Track
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    04:01
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_78X78.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Three"
                />
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Chaand Baaliyan Song
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    01:43
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    Aditya A
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
            </List>
            <Row className="justify-between lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
              <Img
                src="images/img_rectangle20.png"
                className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                alt="RectangleTwenty Four"
              />
              <Column className="mt-[4px] w-[75%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Hum Nashe Mein Toh Nahin
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  03:28
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  Pritam, Arijit Singh, Tulsi Kumar
                </Text>
              </Column>
              <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]"
              orientation="vertical"
            >
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_1.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Five"
                />
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Gehraiyaan Title Track
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    04:01
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_1.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Six"
                />
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Gehraiyaan Title Track
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    04:01
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_1.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Seven"
                />
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Gehraiyaan Title Track
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    04:01
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                </Column>
                <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
              </Row>
            </List>
            <Row className="justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
              <Img
                src="images/img_rectangle20_78X78.png"
                className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                alt="RectangleTwenty Eight"
              />
              <Column className="w-[72%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Chaand Baaliyan Song
                </Text>
                <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  01:43
                </Text>
                <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  Aditya A
                </Text>
              </Column>
              <div className="bg-bluegray_400 border-bluegray_400 border-bw15 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] rotate-[90deg] rounded-radius75 w-[1%]"></div>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default RadioIntegrationPage;
