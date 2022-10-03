import React from "react";

import { Column, Row, Img, Input, Text, Button, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const BHIMUPIIntegrationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img
              src="images/img_group_18.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[52px] 3xl:ml-[62px] flex lg:ml-[40px] w-[36%] xl:ml-[46px]"
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
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Orders
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Categories
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              More
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[1%]"
              alt="arrowdown One"
            />
            <Img
              src="images/img_cart.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] w-[2%]"
              alt="cart"
            />
          </Row>
        </header>
        <Row className="lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[88%]">
          <Column className="bg-white_A700 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 shadow-bs1 w-[67%]">
            <Input
              className="font-medium p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-black_901 text-black_901 w-[100%]"
              wrapClassName="w-[97%]"
              name="Frame9983"
              placeholder="Payment Options"
              size="lg"
              variant="UnderLineBluegray100"
            ></Input>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[98%]">
              <Row className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                <Column className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                  <div className="bg-white_A700 lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                </Column>
                <Img
                  src="images/img_image46.png"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[5%]"
                  alt="imageFortySix"
                />
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[auto]">
                  UPI
                </Text>
              </Row>
              <Column className="lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[66%]">
                <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                  Enter UPI Id
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%] xl:mt-[10px]"
                  type="text"
                  name="InputField One"
                  placeholder="Enter Your First Name"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
                <Button
                  className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  size="lg"
                >
                  Pay $1120.58
                </Button>
              </Column>
            </Column>
            <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius4 w-[97%]">
              <div className="border border-bluegray_100 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
              <Img
                src="images/img_image46.png"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[6%]"
                alt="imageFortySix One"
              />
              <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[auto]">
                UPI
              </Text>
            </Row>
            <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius4 w-[97%]">
              <div className="border border-bluegray_100 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
              <Img
                src="images/img_cut.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] my-[3px] w-[5%]"
                alt="cut"
              />
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[auto]">
                Paypal
              </Text>
            </Row>
            <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius4 w-[97%]">
              <div className="border border-bluegray_100 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
              <Img
                src="images/img_googlepay.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[6%]"
                alt="GooglePay"
              />
              <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[auto]">
                Google Pay
              </Text>
            </Row>
            <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius4 w-[97%]">
              <div className="border border-bluegray_100 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
              <Img
                src="images/img_computer.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[5%]"
                alt="computer"
              />
              <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[auto]">
                Net Banking
              </Text>
            </Row>
            <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius4 w-[97%]">
              <div className="border border-bluegray_100 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
              <Img
                src="images/img_offer_3.svg"
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[4%]"
                alt="offer"
              />
              <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[auto]">
                Cash on Delivery
              </Text>
            </Row>
          </Column>
          <Column className="bg-white_A700 justify-end lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 shadow-bs1 w-[31%]">
            <Input
              className="font-medium p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-black_901 text-black_901 w-[100%]"
              wrapClassName="2xl:ml-[16px] 3xl:ml-[19px] lg:ml-[12px] mt-[1px] w-[91%] xl:ml-[14px]"
              name="Group1658"
              placeholder="Price Details"
              size="xl"
              variant="UnderLineBluegray100"
            ></Input>
            <Row className="items-center justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Price(2 iteam)
              </Text>
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                $1110.58
              </Text>
            </Row>
            <Row className="items-center justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Discount
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                -$111.98
              </Text>
            </Row>
            <Row className="justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Delivery Charges
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                $10
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]" />
            <Row className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[85%]">
              <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                Total Amount
              </Text>
              <Text className="font-medium mb-[1px] lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                $1120.58
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[91%]"
              size="lg"
            >
              Checkout
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default BHIMUPIIntegrationPage;
