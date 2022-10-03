import React from "react";

import { Column, Row, Img, Text, Button, List, Stack } from "components";

const SharePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] lg:pt-[27px] xl:pt-[31px] 2xl:pt-[35px] 3xl:pt-[42px] lg:px-[27px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_6.svg"
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
        <Row className="items-center lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[93%]">
          <Text className="font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
            Gallery
          </Text>
          <Text className="font-semibold 3xl:ml-[1120px] lg:ml-[725px] xl:ml-[829px] 2xl:ml-[933px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
            4 Selected
          </Text>
          <Button
            className="font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
            size="lg"
          >
            Share
          </Button>
        </Row>
        <Column className="lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[93%]">
          <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
            Recent
          </Text>
        </Column>
        <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[90%]">
          <List
            className="xl:gap-[3px] lg:gap-[3px] 3xl:gap-[4px] 2xl:gap-[4px] grid grid-cols-2 min-h-[auto] w-[25%]"
            orientation="horizontal"
          >
            <Column
              className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center w-[100%]"
              style={{ backgroundImage: "url('images/img_group2446.png')" }}
            >
              <Stack className="bg-black_900_4c lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:px-[49px] xl:px-[56px] 2xl:px-[63px] 3xl:px-[75px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                <Img
                  src="images/img_checkmark.svg"
                  className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] justify-center m-[auto] w-[15%]"
                  alt="checkmark"
                />
              </Stack>
            </Column>
            <Column
              className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center w-[100%]"
              style={{ backgroundImage: "url('images/img_group2447.png')" }}
            >
              <Stack className="bg-black_900_4c lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:px-[49px] xl:px-[56px] 2xl:px-[63px] 3xl:px-[75px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                <Img
                  src="images/img_checkmark.svg"
                  className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] justify-center m-[auto] w-[15%]"
                  alt="checkmark One"
                />
              </Stack>
            </Column>
          </List>
          <Column
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2448.png')" }}
          >
            <Column className="bg-black_900_4c lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center justify-end lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[100%]">
              <Img
                src="images/img_checkmark.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[17%]"
                alt="checkmark Two"
              />
              <Img
                src="images/img_videocamera_13X23.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[17%]"
                alt="videocamera"
              />
            </Column>
          </Column>
          <Img
            src="images/img_group2446.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen"
          />
          <Img
            src="images/img_group2447.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleEleven"
          />
          <Stack
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2448.png')" }}
          >
            <Img
              src="images/img_videocamera_13X23.svg"
              className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
              alt="videocamera One"
            />
          </Stack>
          <Img
            src="images/img_group2447.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleEleven One"
          />
          <Stack
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2448.png')" }}
          >
            <Img
              src="images/img_videocamera_13X23.svg"
              className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
              alt="videocamera Two"
            />
          </Stack>
        </Row>
        <Column className="lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[93%]">
          <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
            Last Week
          </Text>
        </Column>
        <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[90%]">
          <Img
            src="images/img_rectangle10.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen One"
          />
          <Column
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2452.png')" }}
          >
            <Column className="bg-black_900_4c lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center justify-end lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[100%]">
              <Img
                src="images/img_checkmark.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[17%]"
                alt="checkmark Three"
              />
              <Img
                src="images/img_videocamera_13X23.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[17%]"
                alt="videocamera Three"
              />
            </Column>
          </Column>
          <Img
            src="images/img_rectangle11.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleEleven Two"
          />
          <Img
            src="images/img_rectangle10.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen Two"
          />
          <Stack
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2452.png')" }}
          >
            <Img
              src="images/img_videocamera_13X23.svg"
              className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
              alt="videocamera Four"
            />
          </Stack>
          <Img
            src="images/img_rectangle11.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleSeventeen"
          />
          <Img
            src="images/img_rectangle10.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen Three"
          />
          <Stack
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2452.png')" }}
          >
            <Img
              src="images/img_videocamera_13X23.svg"
              className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
              alt="videocamera Five"
            />
          </Stack>
        </Row>
        <Row className="items-center mt-[4px] w-[90%]">
          <Img
            src="images/img_rectangle14.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleFourteen"
          />
          <Img
            src="images/img_group10281.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTwelve"
          />
          <Img
            src="images/img_rectangle13.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleThirteen"
          />
          <Img
            src="images/img_rectangle14.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleSixteen"
          />
          <Img
            src="images/img_group10281.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleFifteen"
          />
          <Img
            src="images/img_rectangle13.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleEighteen"
          />
          <Img
            src="images/img_rectangle14.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTwenty"
          />
          <Img
            src="images/img_group10281.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleNineteen"
          />
        </Row>
        <Column className="lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[93%]">
          <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
            A Month Ago
          </Text>
        </Column>
        <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[90%]">
          <Img
            src="images/img_rectangle10.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen Four"
          />
          <Column
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2452.png')" }}
          >
            <Stack className="bg-black_900_4c lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
              <Img
                src="images/img_videocamera_13X23.svg"
                className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
                alt="videocamera Six"
              />
            </Stack>
          </Column>
          <Img
            src="images/img_rectangle11.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleEleven Three"
          />
          <Img
            src="images/img_rectangle10.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen Five"
          />
          <Stack
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2452.png')" }}
          >
            <Img
              src="images/img_videocamera_13X23.svg"
              className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
              alt="videocamera Seven"
            />
          </Stack>
          <Img
            src="images/img_rectangle11.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleSeventeen One"
          />
          <Img
            src="images/img_rectangle10.png"
            className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            alt="RectangleTen Six"
          />
          <Stack
            className="bg-cover bg-repeat lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] ml-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
            style={{ backgroundImage: "url('images/img_group2452.png')" }}
          >
            <Img
              src="images/img_videocamera_13X23.svg"
              className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[15%]"
              alt="videocamera Eight"
            />
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default SharePage;
