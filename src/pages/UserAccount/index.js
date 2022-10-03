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

const UserAccountPage = () => {
  return (
    <>
      <Row className="bg-gray_51 font-gilroy items-center mx-[auto] w-[100%]">
        <aside className="w-[23%]">
          <Column className="">
            <Column className="bg-gray_50 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[91%]">
              <Img
                src="images/img_group_6.svg"
                className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] mt-[3px] mx-[auto] w-[64%]"
                alt="Group"
              />
              <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] py-[1px] rounded-radius8 w-[49%]">
                <Line className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                <Img
                  src="images/img_videocamera_16X16.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="videocamera"
                />
                <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                  Dashboard
                </Text>
              </Row>
              <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[56%]">
                <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[70%]">
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
                <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[69%]">
                  <Img
                    src="images/img_arrowup_10X20.svg"
                    className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[2px] w-[20%]"
                    alt="arrowup"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Analytics
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[73%]">
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
                <Row className="font-opensans ml-[1px] lg:mt-[371px] xl:mt-[425px] 2xl:mt-[478px] 3xl:mt-[573px] w-[46%]">
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
          <Column className="absolute inset-x-[0] items-center mx-[auto] top-[3%] w-[97%]">
            <header className="w-[100%]">
              <Row className="items-center w-[100%]">
                <Text className="font-semibold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_900 w-[auto]">
                  Dashboard
                </Text>
                <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[619px] xl:ml-[708px] 2xl:ml-[797px] 3xl:ml-[956px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
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
            </header>
            <Row className="items-center justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[63%]">
                <Row className="mt-[4px] w-[99%]">
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
                        <span className="text-colors3 font-gilroy">88%</span>
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
                    name="Frame406"
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
                  <Column className="w-[4%]">
                    <Text className="font-normal ml-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      25k
                    </Text>
                    <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      20k
                    </Text>
                    <Text className="font-normal ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      15k
                    </Text>
                    <Text className="font-normal ml-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      10k
                    </Text>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      5k
                    </Text>
                    <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      0k
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[95%]"
                    style={{
                      backgroundImage: "url('images/img_group2425.png')",
                    }}
                  >
                    <Column className="bg-black_901 items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius5 w-[12%]">
                      <Text className="font-medium my-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        $2311.65 5 May
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrow.svg"
                      className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[62px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] w-[3%]"
                      alt="Arrow"
                    />
                  </Column>
                </Row>
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
              <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius8 w-[34%]">
                <Row className="justify-between mt-[4px] w-[98%]">
                  <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Expense Tracking
                  </Text>
                  <SelectBox
                    className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[29%]"
                    placeholderClassName="text-bluegray_600"
                    name="Frame407"
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
                <Row
                  className="bg-cover bg-repeat lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:px-[27px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] lg:w-[155px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]"
                  style={{ backgroundImage: "url('images/img_group2995.svg')" }}
                >
                  <Column className="mb-[2px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[65%]">
                    <Text className="font-semibold lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      28%
                    </Text>
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      12%
                    </Text>
                  </Column>
                  <Column className="lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[25%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      24%
                    </Text>
                    <Text className="font-semibold ml-[3px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      36%
                    </Text>
                  </Column>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[94%]">
                    <div className="bg-blue_900 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[3px] rounded-radius2 w-[8%]"></div>
                    <Text className="font-semibold mb-[1px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Travel
                    </Text>
                    <div className="bg-blue_800 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[105px] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] mt-[3px] rounded-radius2 w-[8%]"></div>
                    <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Sports
                    </Text>
                  </Row>
                  <Row className="3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                    <div className="bg-blue_A700 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[2px] rounded-radius2 w-[7%]"></div>
                    <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Shopping
                    </Text>
                    <div className="bg-blue_A201 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] mt-[2px] rounded-radius2 w-[7%]"></div>
                    <Text className="font-semibold mb-[1px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Medicine
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius8 w-[100%]">
              <Row className="justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[99%]">
                <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Income vs Spending Report
                </Text>
                <SelectBox
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[6%]"
                  placeholderClassName="text-bluegray_600"
                  name="Frame406 One"
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
              <Row className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] pb-[2px] pl-[2px] w-[100%]">
                <Column className="ml-[2px] mt-[4px] w-[2%]">
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
                <List
                  className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-4 mb-[1px] min-h-[auto] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[30%]"
                  orientation="horizontal"
                >
                  <Column className="items-center mb-[1px] w-[100%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <div className="bg-blue_A700 lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Jan
                    </Text>
                  </Column>
                  <Column className="items-center justify-end mb-[1px] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <div className="bg-blue_A700 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 lg:h-[126px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Feb
                    </Text>
                  </Column>
                  <Column className="items-center justify-end mb-[1px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <div className="bg-blue_A700 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Mar
                    </Text>
                  </Column>
                  <Column className="items-center justify-end lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <div className="bg-blue_A700 lg:h-[141px] xl:h-[162px] 2xl:h-[182px] 3xl:h-[218px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Apr
                    </Text>
                  </Column>
                </List>
                <Column className="items-center mb-[1px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[5%]">
                  <Row className="items-end justify-evenly w-[100%]">
                    <div className="bg-blue_A700 lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] xl:mt-[112px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[98px] rounded-radius5 w-[48%]"></div>
                    <div className="bg-blue_200 lg:h-[142px] xl:h-[162px] 2xl:h-[183px] 3xl:h-[219px] rounded-radius5 w-[48%]"></div>
                  </Row>
                  <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    May
                  </Text>
                </Column>
                <Column className="items-center justify-end lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:pt-[25px] xl:pt-[29px] 2xl:pt-[33px] 3xl:pt-[39px] w-[5%]">
                  <Row className="items-end justify-evenly w-[100%]">
                    <div className="bg-blue_A700 xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rounded-radius5 w-[48%]"></div>
                    <div className="bg-blue_200 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] rounded-radius5 w-[48%]"></div>
                  </Row>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    Jun
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[5%]">
                  <Row className="items-end justify-evenly w-[100%]">
                    <div className="bg-blue_A700 lg:h-[127px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[196px] rounded-radius5 w-[48%]"></div>
                    <div className="bg-blue_200 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] rounded-radius5 w-[48%]"></div>
                  </Row>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    Jul
                  </Text>
                </Column>
                <List
                  className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[22%]"
                  orientation="horizontal"
                >
                  <Column className="items-center justify-end lg:pt-[64px] xl:pt-[73px] 2xl:pt-[83px] 3xl:pt-[99px] w-[100%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <div className="bg-blue_A700 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Aug
                    </Text>
                  </Column>
                  <Column className="items-center justify-end mb-[1px] lg:pt-[51px] xl:pt-[58px] 2xl:pt-[66px] 3xl:pt-[79px] w-[100%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <div className="bg-blue_A700 xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Sep
                    </Text>
                  </Column>
                  <Column className="items-center mb-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <div className="bg-blue_A700 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] rounded-radius5 w-[48%]"></div>
                      <div className="bg-blue_200 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius5 w-[48%]"></div>
                    </Row>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Oct
                    </Text>
                  </Column>
                </List>
                <Column className="items-center lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[5%]">
                  <Row className="items-end justify-evenly w-[100%]">
                    <div className="bg-blue_A700 lg:h-[116px] xl:h-[132px] 2xl:h-[149px] 3xl:h-[178px] rounded-radius5 w-[48%]"></div>
                    <div className="bg-blue_200 lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius5 w-[48%]"></div>
                  </Row>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    Nov
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] w-[5%]">
                  <Row className="items-end justify-evenly w-[100%]">
                    <div className="bg-blue_A700 lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] rounded-radius5 w-[48%]"></div>
                    <div className="bg-blue_200 lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rounded-radius5 w-[48%]"></div>
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
          </Column>
          <Column className="absolute bg-gray_52 lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] right-[0] w-[27%]">
            <Row className="justify-between ml-[4px] mt-[3px] w-[98%]">
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
            <Column className="border-blue_A701 border-bw179 border-solid 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] items-center lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]">
              <Img
                src="images/img_profileimglarg.png"
                className="3xl:h-[103px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] mb-[1px] rounded-radius50 3xl:w-[102px] lg:w-[66px] xl:w-[75px] 2xl:w-[85px]"
                alt="ProfileImgLarg One"
              />
            </Column>
            <Text className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Michelle Rock
            </Text>
            <Row className="items-center ml-[2px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[96%]">
              <Img
                src="images/img_notification_19X16.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[7%]"
                alt="notification One"
              />
              <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Notifications
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] w-[3%]"
                alt="arrowright"
              />
            </Row>
            <Row className="ml-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[96%]">
              <Img
                src="images/img_vector_20X19.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] w-[8%]"
                alt="Vector Two"
              />
              <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Language
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] mt-[4px] w-[3%]"
                alt="arrowright One"
              />
            </Row>
            <Row className="items-center ml-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[96%]">
              <Img
                src="images/img_vector_19X20.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[8%]"
                alt="Vector Three"
              />
              <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Dark mode
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] w-[2%]"
                alt="arrowright Two"
              />
            </Row>
            <Row className="ml-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[96%]">
              <Img
                src="images/img_settings_1.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] w-[8%]"
                alt="settings Three"
              />
              <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                General settings
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] mt-[4px] w-[2%]"
                alt="arrowright Three"
              />
            </Row>
            <Row className="items-center lg:mb-[431px] xl:mb-[493px] 2xl:mb-[555px] 3xl:mb-[666px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[96%]">
              <Img
                src="images/img_dashboard.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[9%]"
                alt="dashboard Two"
              />
              <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Theme
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[114px] xl:ml-[130px] 2xl:ml-[147px] 3xl:ml-[176px] w-[2%]"
                alt="arrowright Four"
              />
            </Row>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default UserAccountPage;
