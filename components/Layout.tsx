import {
  Anchor,
  AppShell,
  Aside,
  Footer,
  Header,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";
import modules from "../modules";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useMantineTheme();
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
      header={
        <Header height={70} p="md">
          <Text>Medlify</Text>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 200 }} p="xs">
          {Object.values(modules.config).map(({ path, name }) => (
            <Navbar.Section key={path}>
              <Link href={path} passHref>
                <Anchor>{name}</Anchor>
              </Link>
            </Navbar.Section>
          ))}
        </Navbar>
      }
      aside={
        <Aside width={{ base: 600 }} p="xs">
          Hello
        </Aside>
      }
      footer={
        <Footer height={60} p="md">
          Footer
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
}
