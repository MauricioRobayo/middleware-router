import Link from "next/link";
import { ReactNode } from "react";
import modules from "../modules";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <ul>
          {Object.entries(modules).map(([name, { path }]) => (
            <li key={name}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
