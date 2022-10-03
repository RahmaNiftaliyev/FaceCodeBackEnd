import React from "react";

import { Column, Row, Img, Text, Input, Grid, Button, Stack } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AddFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] lg:pt-[27px] xl:pt-[31px] 2xl:pt-[35px] 3xl:pt-[42px] lg:px-[27px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] w-[100%]">
        <header className="w-[93%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_20.svg"
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
        <Column className="items-center justify-end lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[93%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              People you may know
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="flex w-[39%]"
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
          <Grid className="lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-5 lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_profileimglarg.png"
                className="lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                alt="Rectangle1339"
              />
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Rose J. Henry
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Img
                  src="images/img_profileimglarg_1.png"
                  className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  alt="Rectangle1340"
                />
              </Stack>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Kai Caudle
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Img
                  src="images/img_rectangle1340.png"
                  className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  alt="Rectangle1340 One"
                />
              </Stack>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Jane Cooper
                </Text>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Img
                  src="images/img_profileimglarg_2.png"
                  className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  alt="Rectangle1340 Two"
                />
              </Stack>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Wade Warren
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Img
                  src="images/img_profileimglarg_3.png"
                  className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  alt="Rectangle1340 Three"
                />
              </Stack>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Leslie Alexander
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Img
                  src="images/img_profileimglarg_4.png"
                  className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  alt="Rectangle1340 Four"
                />
              </Stack>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Jenny Wilson
                </Text>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  size="sm"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg_1.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1341.png"
                    className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                    alt="Rectangle1341"
                  />
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Robert Fox
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  size="sm"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  style={{
                    backgroundImage: "url('images/img_rectangle1340.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1341_228X228.png"
                    className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                    alt="Rectangle1341 One"
                  />
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Jane Cooper
                </Text>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  size="sm"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg_2.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1341_1.png"
                    className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                    alt="Rectangle1341 Two"
                  />
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Jacob Jones
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  size="sm"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_profileimglarg.png')",
                }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg_3.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1341_2.png"
                    className="absolute lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] lg:w-[177px] xl:w-[202px] 2xl:w-[228px] 3xl:w-[273px]"
                    alt="Rectangle1341 Three"
                  />
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Devon Lane
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  12 Mutual friends
                </Text>
                <Button className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Add Friend
                </Button>
                <Button
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  size="sm"
                  variant="FillBluegray100"
                >
                  Add Friend
                </Button>
              </Column>
            </Column>
          </Grid>
        </Column>
      </Column>
    </>
  );
};

export default AddFriendsPage;
