'use client';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { SideNav } from '@/components/SideNav/SideNav';
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  Indicator,
  Radio,
  RadioGroup,
  Text,
  TextInput,
} from '@mantine/core';

import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBell,
  IconDots,
  IconDotsVertical,
  IconFlag,
  IconHelp,
  IconSearch,
  IconUserExclamation,
} from '@tabler/icons-react';
import AppInput from '@/components/Input/AppInput';

import { Tabs } from '@mantine/core';
import { Fragment } from 'react';

function AppTab() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">General</Tabs.Tab>
        <Tabs.Tab value="second">Profile</Tabs.Tab>
        <Tabs.Tab value="third">Security</Tabs.Tab>
        <Tabs.Tab value="4">Privacy</Tabs.Tab>
        <Tabs.Tab value="5">Email</Tabs.Tab>
        <Tabs.Tab value="7">Billing</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 210,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header> */}

      <AppShell.Navbar p={40}>
        <SideNav />
      </AppShell.Navbar>

      <AppShell.Main m={0} pl={210}>
        <Flex align="center">
          <Box flex={1} px={50} mb={20} mt={18}>
            <Text style={{ color: 'white' }} size="25px">
              Settings
            </Text>
          </Box>
          <Box flex={0.45}>
            <Flex gap={20} align="center">
              <AppInput leftIcon={<IconSearch size={17} />} placeholder="Search Settings" />
              <Indicator color="red">
                <ActionIcon radius={20} size="lg" variant="outline" color="dark">
                  <IconBell size={18} />
                </ActionIcon>
              </Indicator>
              <IconDotsVertical color="#696969" />
            </Flex>
          </Box>
        </Flex>

        <Divider w={1323} />
        <Flex mt={19} px={50}>
          <AppTab />
        </Flex>
        <Divider w={1323} />
        <Box p={40} w={1320} h={'100ch'} bg="#2e2e2e">
          <Grid>
            <Grid.Col span={{ lg: 7 }}>
              <Card radius={10} p={50} bg="dark">
                <Card.Section>
                  <Text size="lg" fw="bold">
                    General Settings
                  </Text>
                  <Text mt={5} size="xs">
                    Update your profile and how people can contact you generally
                  </Text>
                  <Divider mt={20} />
                  <Flex align="center" mt={20}>
                    <Text flex={1} fw="bold" size="md">
                      Profile details
                    </Text>
                    <Text size="sm" color="blue">
                      Edit
                    </Text>
                  </Flex>
                  <Flex mt={5} gap={15}>
                    <AppInput flex={1} placeholder="Julius" label="First name" />
                    <AppInput flex={1} placeholder="Tensagna" label="Last name" />
                  </Flex>
                  <Flex mt={10}>
                    <AppInput placeholder="tensang12@gmail.com" flex={1} label="Email Address" />
                  </Flex>
                  <Flex mt={10}>
                    <AppInput placeholder="1202 Airport Road" flex={1} label="Address" />
                  </Flex>
                  <Divider mt={20} mb={10} />
                  <Text size="md" fw="bold">
                    Languages
                  </Text>
                  <Flex mt={7} align="center">
                    <Flex flex={1}>
                      <Text size="sm">English</Text>
                    </Flex>
                    <Button size="xs" variant="outline" color="dark">
                      <Text size="xs" color="blue">
                        Change
                      </Text>
                    </Button>
                  </Flex>
                  <Divider mt={20} mb={20} />
                  <Text>App appearance</Text>

                  <Flex gap={10} mt={10}>
                    <Radio size="xs" label="Light mode" />
                    <Radio size="xs" label="Dark mode" />
                    <Radio size="xs" label="System preference" />
                  </Flex>
                  <Divider mt={20} mb={20} />
                </Card.Section>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ lg: 0.5 }}>
              <Flex justify="center" mt={140}>
                <IconDotsVertical />
              </Flex>
            </Grid.Col>

            <Grid.Col span={{ lg: 4 }}>
              <Card radius={10} p="xl" bg="dark">
                <Fragment>
                  <Text size="md" fw="bold">
                    Help and Support
                  </Text>
                  <Box>
                    <Text mt={7} size="sm">
                      looging for info about us?
                    </Text>
                    <Text color="blue" mt={3} fw="bold" size="xs">
                      learn more
                    </Text>
                  </Box>
                  <Box mt={10}>
                    <Text mt={7} size="sm">
                      Tips on how to use pandora?
                    </Text>
                    <Text color="blue" mt={3} fw="bold" size="xs">
                      learn more
                    </Text>
                  </Box>
                </Fragment>
                <Box mt={20}>
                  <Text size="md" fw="bold">
                    Need something else?
                  </Text>
                  <Flex mt={10} gap={5}>
                    <IconUserExclamation size={16} />
                    <Text fw="bold" color="blue" size="xs">
                      Contact support
                    </Text>
                  </Flex>
                  <Flex gap={5} align={'center'} mt={10}>
                    <IconHelp size={16} />

                    <Text fw="bold" color="blue" size="xs">
                      FAQ's
                    </Text>
                  </Flex>
                </Box>
              </Card>
            </Grid.Col>
          </Grid>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default function HomePage() {
  return (
    <main style={{ padding: 0, margin: 0 }}>
      <Layout />
    </main>
  );
}
