import React from 'react'
import { Button } from "@mantine/core"
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
  const sayHi = (): void => {
    alert("Hello World!")
  }

  return (
    <div>
      <AppShell
      // styles={{
      //   main: {
      //     background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      //   },
      // }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 30, md: 45 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <h1 className="text-3xl font-bold underline">
          Soon to look a lot like Reddit
        </h1>
        <Button
          className="bg-blue-600"
          onClick={sayHi}
        >
          Mantine Button
        </Button>
    </AppShell>
        
    </div>
  )
}
