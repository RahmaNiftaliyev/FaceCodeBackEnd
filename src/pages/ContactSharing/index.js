import React from "react";

import {
  Row,
  Column,
  Img,
  Line,
  Text,
  Stack,
  SelectBox,
  List,
} from "components";

const ContactSharingPage = () => {
  return (
    <>
      <Row className="bg-gray_51 font-gilroy items-center mx-[auto] w-[100%]">
        <aside className="w-[23%]">
          <Column className="">
            <Column className="bg-gray_52 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[91%]">
              <Img
                src="images/img_group10392_16.svg"
                className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] mx-[auto] w-[64%]"
                alt="Group10392"
              />
              <Row className="lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[48%]">
                <Line className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                <Img
                  src="images/img_videocamera_16X16.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="videocamera"
                />
                <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                  Dashboard
                </Text>
              </Row>
              <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[56%]">
                <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[69%]">
                  <Img
                    src="images/img_ticket.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[12%]"
                    alt="ticket"
                  />
                  <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Payments
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]">
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[14%]"
                    alt="Vector"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Wallet & Cards
                  </Text>
                </Row>
                <Row className="lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[88%]">
                  <Img
                    src="images/img_settings.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[18%]"
                    alt="settings"
                  />
                  <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Transactions
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[68%]">
                  <Img
                    src="images/img_arrowup_10X20.svg"
                    className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[2px] w-[21%]"
                    alt="arrowup"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Analytics
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[72%]">
                  <Img
                    src="images/img_menu_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="menu"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Messages
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[64%]">
                  <Img
                    src="images/img_settings_20X19.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                    alt="settings One"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="font-opensans ml-[1px] lg:mt-[375px] xl:mt-[429px] 2xl:mt-[483px] 3xl:mt-[579px] w-[45%]">
                  <Img
                    src="images/img_question.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="question"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Help
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </aside>
        <Stack className="2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] w-[77%]">
          <Text className="absolute font-semibold left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_900 top-[4%] w-[auto]">
            Dashboard
          </Text>
          <Stack className="absolute font-opensans 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] left-[0] w-[100%]">
            <Column className="absolute inset-x-[0] items-end mx-[auto] top-[3%] w-[97%]">
              <Row className="items-center justify-end ml-[auto] w-[13%]">
                <Stack className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
                  <Img
                    src="images/img_notification_26X21.svg"
                    className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[38%]"
                    alt="notification"
                  />
                  <Column className="absolute bg-red_700 border border-bluegray_50 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] px-[2px] right-[0] rounded-radius50 top-[2%] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]">
                    <Text className="font-semibold mb-[1px] ml-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      2
                    </Text>
                  </Column>
                </Stack>
                <Column className="border border-blue_A701 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                    alt="ProfileImgLarg"
                  />
                </Column>
              </Row>
              <Column className="font-gilroy items-center lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[63%]">
                    <Row className="pr-[4px] pt-[4px] w-[100%]">
                      <Column className="mt-[3px] pb-[2px] pr-[2px] w-[85%]">
                        <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                          Spend Analysis
                        </Text>
                        <Row className="ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[37%]">
                          <Img
                            src="images/img_vector_8X13.svg"
                            className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[7%]"
                            alt="Vector One"
                          />
                          <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                            <span className="text-colors3 font-gilroy">
                              88%
                            </span>
                            <span className="text-colors4 font-gilroy">
                              {" "}
                              Compared to last week
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <SelectBox
                        className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[15%]"
                        placeholderClassName="text-bluegray_600"
                        name="Group10395"
                        placeholder="This Week"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_bluegray_601.svg"
                            className="mr-[0] lg:w-[8px] lg:h-[4px] xl:w-[9px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </Row>
                    <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        25k
                      </Text>
                      <Line className="bg-bluegray_50 h-[1px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[95%]" />
                    </Row>
                    <Stack className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Column className="absolute bottom-[0] items-center w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                            20k
                          </Text>
                          <Line className="bg-bluegray_50 h-[1px] w-[95%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                            15k
                          </Text>
                          <Line className="bg-bluegray_50 h-[1px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                            10k
                          </Text>
                          <Line className="bg-bluegray_50 h-[1px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[99%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                            5k
                          </Text>
                          <Line className="bg-bluegray_50 h-[1px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[99%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                            0k
                          </Text>
                          <Line className="bg-bluegray_50 h-[1px] w-[96%]" />
                        </Row>
                      </Column>
                      <Stack className="absolute lg:h-[135px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] right-[2%] top-[0] w-[91%]">
                        <Column
                          className="absolute bg-cover bg-repeat bottom-[0] items-end lg:p-[40px] xl:p-[46px] 2xl:p-[52px] 3xl:p-[62px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group2397.png')",
                          }}
                        >
                          <div className="bg-white_A700 border border-blue_A700 border-solid 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:mr-[101px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat lg:h-[53px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] right-[26%] top-[0] lg:w-[52px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[81px]"
                          style={{
                            backgroundImage: "url('images/img_group10405.svg')",
                          }}
                        >
                          <Text className="font-medium 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                            $2311.65 5 May
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[95%]">
                      <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Mon
                      </Text>
                      <Text className="font-normal lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Tue
                      </Text>
                      <Text className="font-normal lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Wed
                      </Text>
                      <Text className="font-normal lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Thu
                      </Text>
                      <Text className="font-normal mb-[1px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Fri
                      </Text>
                      <Text className="font-normal lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Sat
                      </Text>
                      <Text className="font-normal lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Sun
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius8 w-[34%]">
                    <Row className="items-center justify-between mt-[2px] pr-[4px] pt-[4px] w-[99%]">
                      <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Expense Tracking
                      </Text>
                      <SelectBox
                        className="font-semibold mr-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[29%]"
                        placeholderClassName="text-bluegray_600"
                        name="Group10421"
                        placeholder="This Month"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_bluegray_601.svg"
                            className="mr-[0] lg:w-[8px] lg:h-[4px] xl:w-[9px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </Row>
                    <Stack className="lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:w-[155px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]">
                      <Stack className="absolute lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] right-[0] w-[90%]">
                        <Stack className="absolute lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] right-[0] w-[72%]">
                          <Column
                            className="absolute bg-cover bg-repeat lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] right-[3%] top-[0] w-[73%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group10418.svg')",
                            }}
                          >
                            <Text className="font-semibold lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                              24%
                            </Text>
                          </Column>
                          <Column
                            className="absolute bg-cover bg-repeat bottom-[0] lg:h-[102px] xl:h-[116px] 2xl:h-[131px] 3xl:h-[157px] items-center justify-center lg:px-[38px] xl:px-[43px] 2xl:px-[49px] 3xl:px-[58px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group10417.svg')",
                            }}
                          >
                            <Text className="font-semibold lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                              36%
                            </Text>
                          </Column>
                        </Stack>
                        <Column
                          className="absolute bg-cover bg-repeat bottom-[2%] items-center justify-end left-[0] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[44%]"
                          style={{
                            backgroundImage: "url('images/img_group10416.svg')",
                          }}
                        >
                          <Text className="font-semibold lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                            12%
                          </Text>
                        </Column>
                      </Stack>
                      <Column
                        className="absolute bg-cover bg-repeat items-center left-[0] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] top-[0] w-[50%]"
                        style={{
                          backgroundImage: "url('images/img_group10419.svg')",
                        }}
                      >
                        <Text className="font-semibold lg:mb-[31px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          28%
                        </Text>
                      </Column>
                    </Stack>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[93%]"
                      orientation="vertical"
                    >
                      <Row className="items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pr-[2px] py-[2px] w-[100%]">
                        <div className="bg-blue_900 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 w-[7%]"></div>
                        <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Travel
                        </Text>
                        <div className="bg-blue_800 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[105px] xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] rounded-radius2 w-[7%]"></div>
                        <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Sports
                        </Text>
                      </Row>
                      <Row className="items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pr-[2px] py-[2px] w-[100%]">
                        <div className="bg-blue_A700 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 w-[7%]"></div>
                        <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Shopping
                        </Text>
                        <div className="bg-blue_A201 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] rounded-radius2 w-[7%]"></div>
                        <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Medicine
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </Row>
                <footer className="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius8 w-[100%]">
                  <Column className="items-center mx-[auto] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[96%]">
                    <Row className="justify-between pr-[4px] pt-[4px] w-[100%]">
                      <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Income vs Spending Report
                      </Text>
                      <SelectBox
                        className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[6%]"
                        placeholderClassName="text-bluegray_600"
                        name="Frame406"
                        placeholder="Yearly"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_bluegray_601.svg"
                            className="mr-[0] lg:w-[8px] lg:h-[4px] xl:w-[9px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </Row>
                    <Row className="justify-between lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] pb-[2px] w-[99%]">
                      <Column className="mt-[4px] w-[2%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          30K
                        </Text>
                        <Text className="font-normal ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          25K
                        </Text>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          20K
                        </Text>
                        <Text className="font-normal ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          15K
                        </Text>
                        <Text className="font-normal ml-[3px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          10K
                        </Text>
                        <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          5K
                        </Text>
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          0K
                        </Text>
                      </Column>
                      <Column className="items-center mb-[1px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] ml-[1px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Jan
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[126px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] ml-[1px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Feb
                        </Text>
                      </Column>
                      <Column className="items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[7%]">
                        <Row className="items-center w-[78%]">
                          <div className="bg-blue_A700 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] ml-[1px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Mar
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[141px] xl:h-[162px] 2xl:h-[182px] 3xl:h-[218px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] ml-[1px] 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Apr
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] xl:mt-[112px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[98px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[142px] xl:h-[162px] 2xl:h-[183px] 3xl:h-[219px] ml-[1px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          May
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] ml-[1px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Jun
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[127px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[196px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] ml-[1px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Jul
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] ml-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Aug
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] ml-[1px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Sep
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] ml-[1px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Oct
                        </Text>
                      </Column>
                      <Column className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[7%]">
                        <Row className="items-end w-[78%]">
                          <div className="bg-blue_A700 lg:h-[116px] xl:h-[132px] 2xl:h-[149px] 3xl:h-[178px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] ml-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius5 w-[48%]"></div>
                        </Row>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Nov
                        </Text>
                      </Column>
                      <Column className="items-center mb-[1px] w-[5%]">
                        <Row className="items-end justify-evenly w-[100%]">
                          <div className="bg-blue_A700 lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] rounded-radius5 w-[48%]"></div>
                          <div className="bg-blue_200 lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rounded-radius5 w-[50%]"></div>
                        </Row>
                        <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                          Dec
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] py-[2px] w-[20%]">
                      <div className="bg-blue_A700 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 w-[10%]"></div>
                      <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Income
                      </Text>
                      <div className="bg-blue_200 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] rounded-radius2 w-[10%]"></div>
                      <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Spending
                      </Text>
                    </Row>
                  </Column>
                </footer>
              </Column>
            </Column>
            <Column className="absolute bg-gray_52 font-gilroy lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] right-[0] w-[27%]">
              <Row className="justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mr-[2px] mt-[4px] w-[97%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[4px] w-[5%]"
                  alt="arrowleft"
                />
                <Text className="font-semibold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  My Profile
                </Text>
                <Img
                  src="images/img_share_20X20.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="share"
                />
              </Row>
              <Column className="border-blue_A701 border-bw179 border-solid 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] items-center lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]">
                <Img
                  src="images/img_profileimglarg.png"
                  className="3xl:h-[103px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] mb-[1px] rounded-radius50 3xl:w-[102px] lg:w-[66px] xl:w-[75px] 2xl:w-[85px]"
                  alt="ProfileImgLarg One"
                />
              </Column>
              <Text className="font-semibold lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Michelle Rock
              </Text>
              <Column className="lg:mb-[514px] xl:mb-[588px] 2xl:mb-[662px] 3xl:mb-[794px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[71%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Mobile Number
                </Text>
                <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  (808) 555-0111
                </Text>
                <Text className="font-normal lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Email
                </Text>
                <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Michellerock@gmail.com
                </Text>
              </Column>
            </Column>
          </Stack>
        </Stack>
      </Row>
    </>
  );
};

export default ContactSharingPage;
