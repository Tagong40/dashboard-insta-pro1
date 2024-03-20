'use client';
import { useState } from 'react';
import { Group, Code, Flex, Text } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconHome,
  IconCashBanknote,
  IconDashboard,
  IconFile,
  IconHomeDollar,
  IconCurrencyDollar,
  IconSettings2,
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarSimple.module.css';
import SideSwitch from './Switch';

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Investment', icon: IconCashBanknote },
  { link: '', label: 'Dashboard', icon: IconDashboard },
  { link: '', label: 'Files', icon: IconFile },
  { link: '', label: 'Funds', icon: IconCurrencyDollar },
  { link: '', label: 'Settings', icon: IconSettings2 },
];

export function SideNav() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <Group className={classes.header} px={40} pb={40}>
        {/* <MantineLogo size={28} /> */}
        <Code fw={700}>Logo</Code>
      </Group>
      {links}

      <div className={classes.footer}>
        <Flex align="center">
          <SideSwitch />
        </Flex>

        <Flex gap={5} mt={30} align={'center'}>
          <IconLogout color="red" size={20} stroke={1.5} />
          <Text color="red" size="sm">
            Log out
          </Text>
        </Flex>
      </div>
    </nav>
  );
}
