import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  Line,
  Switch,
  Button,
  List,
  Stack,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const BluetoothPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-gilroy items-center mx-[auto] w-[100%]">
        <Row className="bg-white_A700 items-center justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
          <Img
            src="images/img_vector1.svg"
            className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[1%]"
            alt="VectorOne"
          />
          <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_901 w-[auto]">
            Settings
          </Text>
          <Row className="font-segoeuivariable justify-between xl:ml-[1090px] 2xl:ml-[1226px] 3xl:ml-[1472px] lg:ml-[953px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[7px] w-[8%]">
            <Text className="font-normal mt-[2px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_901 w-[auto]">
              
            </Text>
            <Text className="flex font-normal items-center not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_901 w-[auto]">
              
            </Text>
            <Text className="flex font-normal items-center not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_901 w-[auto]">
              
            </Text>
          </Row>
        </Row>
        <Row className="items-center justify-evenly w-[100%]">
          <Column className="bg-white_A700 p-[4px] w-[22%]">
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[92%]">
              <Row className="font-segoeuivariablestatictext items-center w-[57%]">
                <Img
                  src="images/img_ellipse12.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="EllipseTwelve"
                />
                <Column className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[58%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    R4IN80W
                  </Text>
                  <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_700 w-[auto]">
                    @TierOhneNation
                  </Text>
                </Column>
              </Row>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-gilroy font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_901 text-black_901 w-[100%]"
                wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[100%] xl:mt-[10px]"
                name="AutoSuggestBo"
                placeholder="Search"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer lg:w-[7px] lg:h-[8px] lg:ml-[27px] lg:mr-[3px] xl:w-[8px] xl:h-[9px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[42px] 3xl:mr-[6px] rounded-radius4 my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#090b0d"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer lg:w-[7px] lg:h-[8px] lg:ml-[27px] lg:mr-[3px] xl:w-[8px] xl:h-[9px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[42px] 3xl:mr-[6px] rounded-radius4 my-[auto]"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                size="smSrc"
                variant="srcFillBluegray50"
              ></Input>
              <Row className="font-gilroy ml-[4px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius4 w-[25%]">
                <Img
                  src="images/img_lock.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[3px] w-[17%]"
                  alt="lock"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  System
                </Text>
              </Row>
            </Column>
            <Row className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] rounded-radius4 w-[100%]">
              <Line className="bg-blue_A700 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] rounded-radius15 w-[3px]" />
              <Row className="bg-bluegray_50 items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius3 w-[100%]">
                <Img
                  src="images/img_notification_16X13.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[4%]"
                  alt="notification"
                />
                <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Bluetooth & devices
                </Text>
              </Row>
            </Row>
            <Column className="lg:mb-[297px] xl:mb-[339px] 2xl:mb-[382px] 3xl:mb-[458px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[47%]">
              <Row className="items-center rounded-radius4 w-[100%]">
                <Img
                  src="images/img_shape_black_901.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="Shape"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Network & internet
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius4 w-[85%]">
                <Img
                  src="images/img_shape.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="Shape One"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Personalization
                </Text>
              </Row>
              <Row className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius4 w-[42%]">
                <Img
                  src="images/img_folder.svg"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mb-[3px] w-[26%]"
                  alt="folder"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Apps
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius4 w-[60%]">
                <Img
                  src="images/img_settings_14X16.svg"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] w-[18%]"
                  alt="settings One"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Accounts
                </Text>
              </Row>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius4 w-[94%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="call"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Time & language
                </Text>
              </Row>
              <Row className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius4 w-[54%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="call One"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Gaming
                </Text>
              </Row>
              <Row className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius4 w-[72%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="call Two"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Accessibility
                </Text>
              </Row>
              <Row className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius4 w-[96%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="call Three"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Privacy & security
                </Text>
              </Row>
              <Row className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius4 w-[95%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="call Four"
                />
                <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Windows Update
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_54 lg:p-[37px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[78%]">
            <Text className="font-semibold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
              Bluetooth & devices
            </Text>
            <Row className="bg-white_A700 items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] outline outline-[1px] outline-gray_50_19 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius3 w-[98%]">
              <Img
                src="images/img_vector_black_901.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1%]"
                alt="Vector"
              />
              <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[1px] w-[89%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Blutooth
                </Text>
                <Text className="font-normal mt-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_901 w-[auto]">
                  Bluetooth is turned on
                </Text>
              </Column>
              <Switch
                value={true}
                className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[4%]"
              />
            </Row>
            <Row className="bg-white_A700 items-center justify-between lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_50_19 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius3 w-[98%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                Add device
              </Text>
              <Button
                className="font-medium mr-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[15%]"
                variant="OutlineGray54"
              >
                Add device
              </Button>
            </Row>
            <Text className="font-bold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Input
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[98%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 items-center justify-evenly xl:my-[1px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius3 w-[100%]">
                <Img
                  src="images/img_vector_black_901.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[1%]"
                  alt="Vector One"
                />
                <Column className="mt-[1px] w-[93%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    Dell KB216 Wired Keyboard
                  </Text>
                  <div className="bg-green_600 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[3px] mt-[3px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                </Column>
                <Img
                  src="images/img_shape_black_901_13X2.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[2px]"
                  alt="Shape Two"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-evenly xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mt-[2px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius3 w-[100%]">
                <Img
                  src="images/img_vector_black_901.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[1%]"
                  alt="Vector Two"
                />
                <Column className="mt-[1px] w-[93%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    Dell KB216 Wired Keyboard
                  </Text>
                  <div className="bg-green_600 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[3px] mt-[3px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                </Column>
                <Img
                  src="images/img_shape_black_901_13X2.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[2px]"
                  alt="Shape Three"
                />
              </Row>
            </List>
            <Text className="font-bold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Audio
            </Text>
            <Row className="bg-white_A700 items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] outline outline-[1px] outline-gray_50_19 lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius3 w-[98%]">
              <Img
                src="images/img_vector_black_901.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] w-[1%]"
                alt="Vector Three"
              />
              <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[93%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Boult Audio Airbass
                </Text>
                <div className="bg-green_600 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[3px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
              </Column>
              <Img
                src="images/img_shape_black_901_13X2.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[2px]"
                alt="Shape Four"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[98%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 items-center justify-evenly xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] outline outline-[1px] outline-gray_50_19 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius3 w-[100%]">
                <Img
                  src="images/img_vector_black_901.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[1%]"
                  alt="Vector Four"
                />
                <Column className="mt-[1px] w-[92%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    Boult Audio Airbass
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_901 w-[auto]">
                    Bluetooth is turned off
                  </Text>
                </Column>
                <Img
                  src="images/img_shape_black_901_13X2.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[2px]"
                  alt="Shape Five"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-evenly xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] outline outline-[1px] outline-gray_50_19 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius3 w-[100%]">
                <Img
                  src="images/img_vector_black_901.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[1%]"
                  alt="Vector Five"
                />
                <Column className="mt-[1px] w-[92%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    Boult Audio Airbass
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_901 w-[auto]">
                    Bluetooth is turned off
                  </Text>
                </Column>
                <Img
                  src="images/img_shape_black_901_13X2.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[2px]"
                  alt="Shape Six"
                />
              </Row>
            </List>
            <Text className="font-bold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Other devices
            </Text>
            <Row className="bg-white_A700 items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] outline outline-[1px] outline-gray_50_19 lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius3 w-[98%]">
              <Img
                src="images/img_vector_black_901.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] w-[1%]"
                alt="Vector Six"
              />
              <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[93%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Boult Audio Airbass
                </Text>
                <div className="bg-green_600 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[3px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
              </Column>
              <Img
                src="images/img_shape_black_901_13X2.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[2px]"
                alt="Shape Seven"
              />
            </Row>
            <Row className="bg-white_A700 items-center 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_50_19 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius3 w-[98%]">
              <Img
                src="images/img_vector_black_901.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1%]"
                alt="Vector Seven"
              />
              <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[1px] w-[92%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Boult Audio Airbass
                </Text>
                <Text className="font-normal mt-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_901 w-[auto]">
                  Bluetooth is turned off
                </Text>
              </Column>
              <Img
                src="images/img_shape_black_901_13X2.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[2px]"
                alt="Shape Eight"
              />
            </Row>
          </Column>
        </Row>
        <Row className="bg-bluegray_900_7f font-poppins items-end justify-end p-[4px] w-[100%]">
          <Img
            src="images/img_starticon.png"
            className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
            alt="StartIcon"
          />
          <Img
            src="images/img_search_white_A700.png"
            className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
            alt="search"
          />
          <Img
            src="images/img_group5_white_A700.png"
            className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[2%]"
            alt="GroupFive"
          />
          <Img
            src="images/img_widgeticon.png"
            className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[2%]"
            alt="Widgeticon"
          />
          <Column
            className="bg-cover bg-repeat lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] items-center justify-end lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] px-[2px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
            style={{ backgroundImage: "url('images/img_explorericon.png')" }}
          >
            <div className="bg-gradient1  lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[48%]"></div>
          </Column>
          <Stack className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]">
            <Column className="absolute bg-white_A700_0c border border-solid border-white_A700_0c lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] items-center justify-end px-[1px] rounded-radius4 w-[100%]">
              <div className="bg-white_A700_87 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rounded-radius1 w-[41%]"></div>
            </Column>
            <Img
              src="images/img_placeyouricon.png"
              className="absolute bottom-[17%] lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] inset-x-[0] mx-[auto] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
              alt="PlaceYourIcon"
            />
          </Stack>
          <Img
            src="images/img_arrowup.svg"
            className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[267px] xl:ml-[306px] 2xl:ml-[344px] 3xl:ml-[413px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[1%]"
            alt="arrowup"
          />
          <Img
            src="images/img_signal.svg"
            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:my-[10px] xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] w-[1%]"
            alt="signal"
          />
          <Img
            src="images/img_volume.svg"
            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[1%]"
            alt="volume"
          />
          <Img
            src="images/img_computer_12X20.svg"
            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[1%]"
            alt="computer"
          />
          <Column className="items-end mb-[2px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mr-[11px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[4%]">
            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
              11:55 PM
            </Text>
            <Text className="font-normal mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
              10/6/2021
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default BluetoothPage;
