import React from "react";

import { Column, Row, Img, Text, Button, Line, Input, Grid } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FriendListPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_24.svg"
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
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
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
        <Row className="items-end lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[93%]">
          <Column className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[11%]">
            <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
              All Friends
            </Text>
            <Line className="bg-blue_A700 h-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[69%]" />
          </Column>
          <Text className="font-medium lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
            Recently Added
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:ml-[518px] 3xl:ml-[621px] flex lg:ml-[402px] mb-[2px] w-[39%] xl:ml-[460px]"
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
        <Grid className="lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-3 lg:mb-[239px] xl:mb-[273px] 2xl:mb-[308px] 3xl:mb-[369px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg"
            />
            <Column className="mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[74%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Rose J. Henry
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                24 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] mr-[3px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_1.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg One"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Kai Caudle
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                12 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[5%]"
              alt="Vector One"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_9.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Two"
            />
            <Column className="w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Carmelo Rousseau
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                14 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[5%]"
              alt="Vector Two"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_2.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Three"
            />
            <Column className="w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Ali Comer
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                10 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[5%]"
              alt="Vector Three"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_3.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Four"
            />
            <Column className="mb-[4px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Jacklyn Kovach
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                09 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Four"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_4.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Five"
            />
            <Column className="mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Landon Mosby
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                05 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Five"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_5.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Six"
            />
            <Column className="w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Man Marin
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                31 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[5%]"
              alt="Vector Six"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_6.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Seven"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Benito Nickel
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                50 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[5%]"
              alt="Vector Seven"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_7.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Eight"
            />
            <Column className="mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Angelyn Weiner
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                35 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Eight"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Nine"
            />
            <Column className="mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[74%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Rose J. Henry
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                24 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] mr-[3px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Nine"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_1.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Ten"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Kai Caudle
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                12 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[5%]"
              alt="Vector Ten"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_9.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Eleven"
            />
            <Column className="w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Carmelo Rousseau
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                14 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[5%]"
              alt="Vector Eleven"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_2.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Twelve"
            />
            <Column className="w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Ali Comer
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                10 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[5%]"
              alt="Vector Twelve"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_3.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Thirteen"
            />
            <Column className="mb-[4px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Jacklyn Kovach
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                09 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Thirteen"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_4.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Fourteen"
            />
            <Column className="mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Landon Mosby
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                05 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Fourteen"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_5.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Fifteen"
            />
            <Column className="w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Man Marin
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                31 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[5%]"
              alt="Vector Fifteen"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_6.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Sixteen"
            />
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Benito Nickel
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                50 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[5%]"
              alt="Vector Sixteen"
            />
          </Row>
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 w-[100%]">
            <Img
              src="images/img_profileimglarg_7.png"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[1px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="ProfileImgLarg Seventeen"
            />
            <Column className="mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[73%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Angelyn Weiner
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                35 Mutual friends
              </Text>
            </Column>
            <Img
              src="images/img_vector_bluegray_400.svg"
              className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:my-[17px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[5%]"
              alt="Vector Seventeen"
            />
          </Row>
        </Grid>
      </Column>
    </>
  );
};

export default FriendListPage;
