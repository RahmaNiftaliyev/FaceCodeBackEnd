import React from "react";

import { Column, Row, Img, Text, Button, Grid, Stack } from "components";

const VideoLibraryPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[93%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group_8.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[13%]"
              alt="Group"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[217px] xl:ml-[248px] 2xl:ml-[279px] 3xl:ml-[334px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
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
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[172px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
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
        <Row className="items-center justify-between lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[93%]">
          <Text className="font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
            Videos
          </Text>
          <Button
            className="flex items-center justify-center text-center w-[7%]"
            leftIcon={
              <Img
                src="images/img_filter.svg"
                className="text-center lg:w-[15px] lg:h-[16px] lg:mr-[9px] xl:w-[17px] xl:h-[18px] xl:mr-[10px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[14px]"
                alt="filter"
              />
            }
            size="lg"
          >
            <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
              Filter
            </div>
          </Button>
        </Row>
        <Grid className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-4 lg:mb-[298px] xl:mb-[341px] 2xl:mb-[384px] 3xl:mb-[461px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[93%]">
          <Column className="w-[100%]">
            <Column
              className="bg-cover bg-repeat justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius5 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9790.png')" }}
            >
              <Text className="bg-red_A200 font-normal ml-[1px] lg:mr-[192px] xl:mr-[219px] 2xl:mr-[247px] 3xl:mr-[296px] mt-[1px] not-italic pl-[4px] py-[1px] rounded-radius3 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[33px]">
                New
              </Text>
              <Stack className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[187px] xl:ml-[214px] 2xl:ml-[241px] 3xl:ml-[289px] mr-[1px] 2xl:mt-[102px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] w-[14%]">
                <div className="absolute bg-gradient  bottom-[7%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] rounded-radius3 w-[100%]"></div>
                <Text className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[max-content]">
                  09:54
                </Text>
              </Stack>
            </Column>
            <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Big Buck Buny
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius6 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9789.png')" }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Funny Seacat
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius5 w-[100%]"
              style={{
                backgroundImage: "url('images/img_group9789_147X296.png')",
              }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Speed Car Racing
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius5 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9789_1.png')" }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Skiing on the snow
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius5 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9789_2.png')" }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Huge Aquarium
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius5 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9789_3.png')" }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Rain Rain Rain
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius5 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9789_4.png')" }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Into the woods
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[115px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius5 w-[100%]"
              style={{ backgroundImage: "url('images/img_group9789_5.png')" }}
            >
              <div className="absolute bg-gradient  bottom-[1%] lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius3 w-[13%]"></div>
              <Text className="absolute bottom-[0] font-normal not-italic right-[1%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                09:54
              </Text>
            </Stack>
            <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
              Let’s Travel
            </Text>
          </Column>
        </Grid>
      </Column>
    </>
  );
};

export default VideoLibraryPage;
