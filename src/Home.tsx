import React from 'react'
import { Button } from "@mantine/core"
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"
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
  Modal,
  Group,
} from '@mantine/core';
import Login from './Login';
import breadImg from './assets/bread.png';
import { useDisclosure } from '@mantine/hooks';


export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [modalOpened, {open, close}] = useDisclosure(false);
  
  const sayHi = (): void => {
    alert("Hello World!")
  }

  return (
    <div>
      <AppShell
      // styles={{
      //   // main: {
      //   //   background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      //   // },
      // }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 245 }}>
          <Text>Application navbar</Text>
          <img src={breadImg} alt="Bread" style={{height: '20px', width: '20px'}} />
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
          <div className={'flex'} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Breaddit</Text>
            <img src={breadImg} alt="Bread" style={{height: '20px', width: '20px'}} />
            <Button className='ml-auto pr-9' onClick={open} >Login</Button>
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
