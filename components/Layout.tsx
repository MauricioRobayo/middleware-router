import {
  AppShell,
  Burger,
  Footer,
  Header,
  Text,
  useMantineTheme,
  Menu,
  Group,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import { ReactNode, useState } from "react";
import modules from "../modules";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      footer={
        <Footer height={60} p="md">
          Footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <Group position="apart">
            <Text>Medlify</Text>
            <Menu
              control={
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              }
            >
              {Object.values(modules.config).map(({ path, name }) => (
                <Menu.Item key={path}>
                  <Link href={path}>
                    <Anchor>{name}</Anchor>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
