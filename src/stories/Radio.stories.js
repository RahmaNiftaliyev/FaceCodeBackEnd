import { Radio } from "components";
export default {
  title: "rahman_niftaliyev_s_application2/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  shape: "RoundedBorder12",
  variant: "FillBlueA700",
  size: "sm",
  inputClassName: "mr-1",
};
