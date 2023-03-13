import { Meta, Story } from "@storybook/react";

import { InputField, InputFieldProps } from "./input-field";

const meta: Meta = {
    title: 'Components/InputField',
    component: InputField,
};
export default meta;

const Template: Story<InputFieldProps> = (props) =>  (
    <InputField {...props} />
);

export const Default = Template.bind({});
Default.args = {
    label: "Your full name",
};

export const WithError = Template.bind({});
WithError.args = {
    label: "Your full name",
    error: {
        type: "failed",
        message: "Cannot be blank",
    },
};