import { TextArea } from "components";
export default {
  title: "rahman_niftaliyev_s_application2/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineBluegray100",
  size: "sm",
  placeholder: "placeholder",
};
