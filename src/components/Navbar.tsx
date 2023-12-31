import {
  Navbar,
  ScrollArea,
  Text,
  createStyles,
  rem,
  type NavbarProps,
} from '@mantine/core';
import { IconNumber1, IconNumber2 } from '@tabler/icons-react';
import { LinksGroup, type LinksGroupProps } from './LinksGroup';

const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },
}));

const pageGenerate = (
  page: string,
  icon: React.FC<{ size?: string }>,
  opened = false,
) => {
  return [
    {
      label: `Stage ${page}`,
      icon,
      initiallyOpened: opened,
      links: [
        { link: `stage${page}/failed`, label: `Stage ${page} Failed` },
        { link: `stage${page}/passed`, label: `Stage ${page} Passed` },
      ],
    },
  ];
};

const data: LinksGroupProps[] = [
  ...pageGenerate('1', IconNumber1),
  ...pageGenerate('2', IconNumber2, true),
];

const CustomNavbar = (props: Omit<NavbarProps, 'children'>) => {
  const { classes } = useStyles();

  return (
    <Navbar p="xs" {...props}>
      <Navbar.Section grow component={ScrollArea} className={classes.links}>
        {data.map(item => (
          <LinksGroup {...item} key={item.label} />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Text align="center">NOT built with ❤️ anymore</Text>
      </Navbar.Section>
    </Navbar>
  );
};

export default CustomNavbar;
