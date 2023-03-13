import { ChatIcon } from '@chakra-ui/icons';
import { Meta, Story } from '@storybook/react';

import { Link, LinkProps } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

export default meta;

const Template: Story<LinkProps> = (props) => (
  <Link {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'An anchor tag',
  href: '#',
  shallow: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'A link with an icon',
  icon: <ChatIcon />,
  href: '#',
};
