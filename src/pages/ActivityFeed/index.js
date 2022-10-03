import React from "react";

import { Column, Row, Img, Input, Text, List, Stack, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ActivityFeedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_group10392_11.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[12%]"
              alt="Group10392"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[60px] 3xl:ml-[72px] flex lg:ml-[46px] w-[35%] xl:ml-[53px]"
              name="Group10270"
              placeholder="Search"
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer mr-[0] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#bac1ce"
                  />
                ) : (
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[0] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder6"
              size="lgSrc"
            ></Input>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
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
              className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
              alt="ProfileImgLarg"
            />
          </Row>
        </header>
        <Column className="bg-white_A700 lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] shadow-bs w-[42%]">
          <Row className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[3px] w-[62%]">
            <Img
              src="images/img_arrowleft.svg"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[3px] w-[3%]"
              alt="arrowleft"
            />
            <Text className="font-semibold lg:ml-[140px] xl:ml-[161px] 2xl:ml-[181px] 3xl:ml-[217px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Activity Feed
            </Text>
          </Row>
          <Column className="lg:mb-[137px] xl:mb-[157px] 2xl:mb-[177px] 3xl:mb-[212px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
            <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Today
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg One"
                  />
                  <Button
                    className="absolute bottom-[0] flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillRed400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification"
                    />
                  </Button>
                </Stack>
                <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[52%]">
                  <span className="text-colors font-gilroy font-semibold">
                    Rose
                  </span>
                  <span className="text-colors font-gilroy"> </span>
                  <span className="text-colors font-gilroy">liked a photo</span>
                  <span className="text-colors font-gilroy"> </span>
                  <span className="text-colors font-gilroy font-semibold">
                    Carmelo’s
                  </span>
                  <span className="text-colors font-gilroy"> </span>
                  <span className="text-colors font-gilroy">post.</span>
                  <span className="text-colors1 font-gilroy"> 20 min ago.</span>
                </Text>
                <Img
                  src="images/img_rectangle14.png"
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] w-[10%]"
                  alt="ProfileImgLarg One"
                />
              </Row>
              <Row className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg Two"
                  />
                  <Button
                    className="absolute bottom-[0] flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillRed400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification One"
                    />
                  </Button>
                </Stack>
                <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[46%]">
                  <span className="text-colors font-gilroy font-semibold">
                    Benito
                  </span>
                  <span className="text-colors font-gilroy">
                    {" "}
                    liked a photo{" "}
                  </span>
                  <span className="text-colors font-gilroy font-semibold">
                    Carmelo’s{" "}
                  </span>
                  <span className="text-colors font-gilroy">post. </span>
                  <span className="text-colors1 font-gilroy">50 min ago.</span>
                </Text>
                <Img
                  src="images/img_rectangle14.png"
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] w-[10%]"
                  alt="ProfileImgLarg One One"
                />
              </Row>
            </List>
            <Text className="font-medium lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              This Month
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center mr-[3px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg Three"
                  />
                  <Button
                    className="absolute bottom-[0] flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillBlueA200"
                  >
                    <Img
                      src="images/img_videocamera_13X23.svg"
                      className="flex items-center justify-center"
                      alt="videocamera"
                    />
                  </Button>
                </Stack>
                <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[51%]">
                  <span className="text-colors font-gilroy font-semibold">
                    Anton
                  </span>
                  <span className="text-colors font-gilroy">
                    {" "}
                    Posted a new video{" "}
                  </span>
                  <span className="text-colors font-gilroy font-semibold">
                    “Video Name”
                  </span>
                  <span className="text-colors font-gilroy">. </span>
                  <span className="text-colors1 font-gilroy">5w</span>
                </Text>
                <Img
                  src="images/img_vector_bluegray_400.svg"
                  className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[122px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] w-[3%]"
                  alt="Vector"
                />
              </Row>
              <Row className="items-center mr-[3px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg Four"
                  />
                  <Button
                    className="absolute bottom-[0] flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillBlueA200"
                  >
                    <Img
                      src="images/img_videocamera_13X23.svg"
                      className="flex items-center justify-center"
                      alt="videocamera One"
                    />
                  </Button>
                </Stack>
                <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[47%]">
                  <span className="text-colors font-gilroy font-semibold">
                    Kai
                  </span>
                  <span className="text-colors font-gilroy">
                    {" "}
                    Posted a new video{" "}
                  </span>
                  <span className="text-colors font-gilroy font-semibold">
                    “Video Name”
                  </span>
                  <span className="text-colors font-gilroy">. </span>
                  <span className="text-colors1 font-gilroy">5w</span>
                </Text>
                <Img
                  src="images/img_vector_bluegray_400.svg"
                  className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[140px] xl:ml-[161px] 2xl:ml-[181px] 3xl:ml-[217px] w-[3%]"
                  alt="Vector One"
                />
              </Row>
              <Row className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg Five"
                  />
                  <Button
                    className="absolute bottom-[0] flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillRed400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification Two"
                    />
                  </Button>
                </Stack>
                <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[46%]">
                  <span className="text-colors font-gilroy font-semibold">
                    Benito
                  </span>
                  <span className="text-colors font-gilroy">
                    {" "}
                    liked a photo{" "}
                  </span>
                  <span className="text-colors font-gilroy font-semibold">
                    Carmelo’s{" "}
                  </span>
                  <span className="text-colors font-gilroy">post. </span>
                  <span className="text-colors1 font-gilroy">6w.</span>
                </Text>
                <Img
                  src="images/img_group10281.png"
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] w-[10%]"
                  alt="ProfileImgLarg One Two"
                />
              </Row>
              <Row className="items-center mr-[3px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg Six"
                  />
                  <Button
                    className="absolute bottom-[0] flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillBlueA200"
                  >
                    <Img
                      src="images/img_videocamera_13X23.svg"
                      className="flex items-center justify-center"
                      alt="videocamera Two"
                    />
                  </Button>
                </Stack>
                <Text className="font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[50%]">
                  <span className="text-colors font-gilroy">
                    Marin Posted a new video{" "}
                  </span>
                  <span className="text-colors font-gilroy font-semibold">
                    “Video Name”
                  </span>
                  <span className="text-colors font-gilroy">. </span>
                  <span className="text-colors1 font-gilroy">5w</span>
                </Text>
                <Img
                  src="images/img_vector_bluegray_400.svg"
                  className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[125px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] w-[3%]"
                  alt="Vector Two"
                />
              </Row>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ActivityFeedPage;
