import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Stack,
  Text,
  List,
  SelectBox,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const GoogleAdsenseIntegrationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
            <Img
              src="images/img_googleadsense.png"
              className="lg:h-[52px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[15%]"
              alt="Googleadsense"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[79px] 3xl:ml-[94px] flex lg:ml-[61px] w-[28%] xl:ml-[70px]"
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
        </Column>
        <Row className="w-[94%]">
          <aside className="w-[25%]">
            <Column className="">
              <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[90%]">
                <Row className="items-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[28%]">
                  <Img
                    src="images/img_settings.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="settings"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mr-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[33%]">
                  <Img
                    src="images/img_user.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] w-[25%]"
                    alt="user"
                  />
                  <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    My Ads
                  </Text>
                </Row>
                <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[63%]">
                  <Img
                    src="images/img_minimize.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="minimize"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Allow & Block Ads
                  </Text>
                </Row>
                <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[73%]">
                  <Img
                    src="images/img_vector_bluegray_700.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Performance Reports
                  </Text>
                </Row>
                <Row className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[48%]">
                  <Img
                    src="images/img_bag.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[13%]"
                    alt="bag"
                  />
                  <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Optimization
                  </Text>
                </Row>
                <Row className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mr-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[36%]">
                  <Img
                    src="images/img_settings_20X19.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                    alt="settings One"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mr-[auto] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] pl-[1px] py-[1px] w-[58%]">
                  <Stack className="bg-bluegray_700 lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] outline outline-[0.25px] outline-bluegray_700 px-[3px] rounded-radius50 lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]">
                    <Img
                      src="images/img_link.svg"
                      className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[62%]"
                      alt="link"
                    />
                  </Stack>
                  <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Send Feedback
                  </Text>
                </Row>
                <Row className="font-opensans xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[auto] lg:mt-[370px] xl:mt-[423px] 2xl:mt-[476px] 3xl:mt-[571px] w-[26%]">
                  <Img
                    src="images/img_question_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="question"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Help
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[75%]">
            <List
              className="lg:gap-[20px] xl:gap-[23px] 2xl:gap-[26px] 3xl:gap-[31px] grid grid-cols-4 min-h-[auto] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-blue_51 items-center justify-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius737 w-[100%]">
                <Text className="font-semibold 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
                  Running Ads
                </Text>
                <Text className="font-semibold lg:my-[16px] xl:my-[18px] 2xl:my-[21px] 3xl:my-[25px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-blue_A700 w-[auto]">
                  1.1k
                </Text>
              </Column>
              <Column className="bg-blue_51 items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius737 w-[100%]">
                <Text className="font-semibold 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
                  Today’s Earnings
                </Text>
                <Text className="font-semibold lg:my-[16px] xl:my-[18px] 2xl:my-[21px] 3xl:my-[25px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-blue_A700 w-[auto]">
                  $110
                </Text>
              </Column>
              <Column className="bg-blue_51 items-center justify-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius737 w-[100%]">
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
                  Last 7 days
                </Text>
                <Text className="font-semibold lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-blue_A700 w-[auto]">
                  $110
                </Text>
              </Column>
              <Column className="bg-blue_51 items-center justify-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius737 w-[100%]">
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
                  Total Earnings
                </Text>
                <Text className="font-semibold lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-blue_A700 w-[auto]">
                  $110
                </Text>
              </Column>
            </List>
            <Row className="items-center justify-between lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]">
              <List
                className="gap-[0] min-h-[auto] w-[49%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 justify-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius12 w-[100%]">
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[98%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_901 w-[auto]">
                      Total Page Views
                    </Text>
                    <SelectBox
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[17%]"
                      placeholderClassName="text-blue_A700"
                      name="Group9918"
                      placeholder="Month"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_600.svg"
                          className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </Row>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_300 w-[auto]">
                    No of total page views by month
                  </Text>
                  <Row className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[4px] w-[97%]">
                    <Text className="font-semibold lg:leading-[12px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] rotate-[90deg] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 text-right w-[2%]">
                      Page Views
                    </Text>
                    <Column className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[4%]">
                      <Text className="font-semibold ml-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        50K
                      </Text>
                      <Text className="font-semibold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        40K
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        30K
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        20K
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        10K
                      </Text>
                      <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        0
                      </Text>
                    </Column>
                    <Column className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[88%]">
                      <Stack className="lg:h-[136px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] w-[100%]">
                        <Stack className="absolute bottom-[1%] lg:h-[135px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] w-[100%]">
                          <Stack className="absolute bottom-[0] lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] w-[100%]">
                            <Stack className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] w-[100%]">
                              <Stack className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] w-[100%]">
                                <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[10%] w-[1px]" />
                                <Column className="absolute items-center top-[9%] w-[100%]">
                                  <Line className="bg-bluegray_100 h-[0.6px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                </Column>
                              </Stack>
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[23%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[36%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[49%] right-[50%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] right-[36%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] right-[23%] w-[1px]" />
                            </Stack>
                            <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] right-[9%] w-[1px]" />
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[23%] inset-x-[0] mx-[auto] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[81%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1604.svg')",
                              }}
                            >
                              <Row className="justify-end ml-[auto] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] w-[55%]">
                                <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                                <div className="bg-blue_A700 border-blue_A700 border-bw06 border-solid 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                                <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                              </Row>
                              <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[150px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                              <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                            </Column>
                          </Stack>
                          <div className="absolute bg-white_A700 border-blue_A700 border-bw06 border-solid bottom-[19%] lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] left-[10%] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Column className="absolute bg-white_A700 justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] right-[16%] shadow-bs2 top-[0] w-[36%]">
                            <Text className="font-medium ml-[4px] mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                              Apr 01 - Apr 31
                            </Text>
                            <Row className="ml-[4px] mr-[auto] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[37%]">
                              <div className="bg-blue_A700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius08 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                              <Text className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_300 w-[auto]">
                                29,535
                              </Text>
                            </Row>
                            <Row className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[88%]">
                              <Img
                                src="images/img_vector23.svg"
                                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] w-[9%]"
                                alt="VectorTwentyThree"
                              />
                              <Text className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_700 w-[auto]">
                                12.6% (4265 views)
                              </Text>
                            </Row>
                          </Column>
                        </Stack>
                        <div className="absolute bg-white_A700 border-blue_A700 border-bw06 border-solid bottom-[33%] lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] right-[8%] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                        <Img
                          src="images/img_group97.svg"
                          className="absolute bottom-[0] lg:h-[119px] xl:h-[137px] 2xl:h-[154px] 3xl:h-[184px] w-[100%]"
                          alt="GroupNinetySeven"
                        />
                      </Stack>
                      <Row className="justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[86%]">
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Jan
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Feb
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Mar
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Apr
                        </Text>
                        <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          May
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Jun
                        </Text>
                        <Text className="font-semibold mb-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Jul
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-white_A700 justify-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius12 w-[100%]">
                  <Row className="justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[98%]">
                    <Text className="font-bold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_901 w-[auto]">
                      Total Site Views
                    </Text>
                    <SelectBox
                      className="font-normal mt-[2px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[17%]"
                      placeholderClassName="text-blue_A700"
                      name="Group9918 One"
                      placeholder="Month"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_600.svg"
                          className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </Row>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_300 w-[auto]">
                    No of total Site views by month
                  </Text>
                  <Row className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[4px] w-[97%]">
                    <Text className="font-semibold lg:leading-[12px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] rotate-[90deg] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 text-right w-[2%]">
                      Page Views
                    </Text>
                    <Column className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[4%]">
                      <Text className="font-semibold ml-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        50K
                      </Text>
                      <Text className="font-semibold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        40K
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        30K
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        20K
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        10K
                      </Text>
                      <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                        0
                      </Text>
                    </Column>
                    <Column className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[88%]">
                      <Stack className="lg:h-[136px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] w-[100%]">
                        <Stack className="absolute bottom-[1%] lg:h-[135px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] w-[100%]">
                          <Stack className="absolute bottom-[0] lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] w-[100%]">
                            <Stack className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] w-[100%]">
                              <Stack className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] w-[100%]">
                                <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[10%] w-[1px]" />
                                <Column className="absolute items-center top-[9%] w-[100%]">
                                  <Line className="bg-bluegray_100 h-[0.6px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                  <Line className="bg-bluegray_100 h-[0.6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rotate-[180deg] w-[100%]" />
                                </Column>
                              </Stack>
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[23%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[36%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[49%] right-[50%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] right-[36%] w-[1px]" />
                              <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] right-[23%] w-[1px]" />
                            </Stack>
                            <Line className="absolute bg-bluegray_100 lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] right-[9%] w-[1px]" />
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[23%] inset-x-[0] mx-[auto] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[81%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1604.svg')",
                              }}
                            >
                              <Row className="justify-end ml-[auto] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] w-[55%]">
                                <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                                <div className="bg-blue_A700 border-blue_A700 border-bw06 border-solid 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                                <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                              </Row>
                              <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[150px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                              <div className="bg-white_A700 border-blue_A700 border-bw06 border-solid lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                            </Column>
                          </Stack>
                          <div className="absolute bg-white_A700 border-blue_A700 border-bw06 border-solid bottom-[19%] lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] left-[10%] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Column className="absolute bg-white_A700 justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] right-[16%] shadow-bs2 top-[0] w-[36%]">
                            <Text className="font-medium ml-[4px] mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                              Apr 01 - Apr 31
                            </Text>
                            <Row className="ml-[4px] mr-[auto] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[37%]">
                              <div className="bg-blue_A700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius08 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                              <Text className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_300 w-[auto]">
                                29,535
                              </Text>
                            </Row>
                            <Row className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[88%]">
                              <Img
                                src="images/img_vector23.svg"
                                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] w-[9%]"
                                alt="VectorTwentyThree One"
                              />
                              <Text className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_700 w-[auto]">
                                12.6% (4265 views)
                              </Text>
                            </Row>
                          </Column>
                        </Stack>
                        <div className="absolute bg-white_A700 border-blue_A700 border-bw06 border-solid bottom-[33%] lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] right-[8%] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                        <Img
                          src="images/img_group97.svg"
                          className="absolute bottom-[0] lg:h-[119px] xl:h-[137px] 2xl:h-[154px] 3xl:h-[184px] w-[100%]"
                          alt="GroupNinetySeven One"
                        />
                      </Stack>
                      <Row className="justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[86%]">
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Jan
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Feb
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Mar
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Apr
                        </Text>
                        <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          May
                        </Text>
                        <Text className="font-semibold my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Jun
                        </Text>
                        <Text className="font-semibold mb-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Jul
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </List>
              <Column className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius12 w-[49%]">
                <Row className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[82%]">
                  <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Products
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Customers
                  </Text>
                </Row>
                <Column className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]">
                  <Row className="items-center w-[91%]">
                    <Img
                      src="images/img_image122.png"
                      className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[14%]"
                      alt="image122"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Decoration lights
                    </Text>
                    <Text className="font-semibold lg:ml-[105px] xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Michele Sams
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[91%]">
                    <Img
                      src="images/img_image123.png"
                      className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[14%]"
                      alt="image123"
                    />
                    <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Men’s Casual Shirts
                    </Text>
                    <Text className="font-semibold lg:ml-[105px] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Anne Juliet
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[91%]">
                    <Img
                      src="images/img_image124.png"
                      className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[14%]"
                      alt="image124"
                    />
                    <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Blutooth Handsfree
                    </Text>
                    <Text className="font-semibold xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Robin Mathew
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[91%]">
                    <Img
                      src="images/img_image125.png"
                      className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[14%]"
                      alt="image125"
                    />
                    <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Office Chairs
                    </Text>
                    <Text className="font-semibold lg:ml-[139px] xl:ml-[159px] 2xl:ml-[179px] 3xl:ml-[214px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Alex Costa
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[91%]">
                    <Img
                      src="images/img_image124.png"
                      className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[14%]"
                      alt="image124 One"
                    />
                    <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Blutooth Handsfree
                    </Text>
                    <Text className="font-semibold xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Robin Mathew
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default GoogleAdsenseIntegrationPage;
