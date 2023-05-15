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
} from '@mantine/core';
import Login from '@/Login';
import breadImg from '@/assets/bread.png';
import { useDisclosure } from '@mantine/hooks';


export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [modalOpened, {open, close}] = useDisclosure(false);
  
  const sayHi = (): void => {
    alert("Hello World!")
  }

  return (
    <div className='tw-'>
      <AppShell
      // styles={{
      //   // main: {
      //   //   background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      //   // },
      // }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // Navbar is actually the sidebar - called navbar in mantine for whatever reason
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 245 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      // Aside is the right hand sidebar
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
      // Header here is the navbar, when the viewport becomes small enough, most of the sidebar "navbar in Mantine" becomes a hamburger menu in Header
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

            <img  className='ml-2' src={breadImg} alt="Bread" style={{height: '20px', width: '20px'}} />
            <Text className='ml-2'>Breaddit</Text>
            {/* This button opens the login modal */}
            <Button className='tw-ml-auto tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500' onClick={open} >Log In</Button>
          </div>
        </Header>
      }
      >
        <Modal opened={modalOpened} onClose={close} title="Log In / Register" centered>
        {<Login />}
      </Modal>
      <h1 className="tw-text-3xl tw-font-bold tw-underline">
          Soon to look a lot like Reddit
        </h1>
        <Button
          className="tw-bg-blue-600"
          onClick={sayHi}
        >
          Mantine Button
        </Button>
      </AppShell>
    </div>
  )
}
