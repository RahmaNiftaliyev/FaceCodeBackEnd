import { Input } from "components";
export default {
  title: "rahman_niftaliyev_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder6",
  variant: "srcOutlineBluegray300",
  size: "mdSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
