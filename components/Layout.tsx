import {
  Anchor,
  AppShell,
  Footer,
  Group,
  Header,
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
        <Header height="auto" p="md">
          <Group position="apart">
            <Text>Medlify</Text>
            <Group>
              {Object.values(modules.config).map(({ path, name }) => (
                <Link key={path} href={path} passHref>
                  <Anchor>{name}</Anchor>
                </Link>
              ))}
            </Group>
          </Group>
        </Header>
      }
      footer={
        <Footer height="auto" p="md">
          Footer
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
}
