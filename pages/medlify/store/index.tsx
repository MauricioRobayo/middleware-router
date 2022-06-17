import { Anchor } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import modules from "../../../modules";

const StorePage = () => {
  return (
    <>
      <Head>
        <title>This is the store</title>
      </Head>
      <ul>
        <li>
          <Link
            href={`${modules.config.store.productsPath}/product-1`}
            passHref
          >
            <Anchor>Product 1</Anchor>
          </Link>
        </li>
        <li>
          <Link
            href={`${modules.config.store.productsPath}/product-2`}
            passHref
          >
            <Anchor>Product 2</Anchor>
          </Link>
        </li>
        <li>
          <Link
            href={`${modules.config.store.productsPath}/product-3`}
            passHref
          >
            <Anchor>Product 3</Anchor>
          </Link>
        </li>
        <li>
          <Link
            href={`${modules.config.store.productsPath}/product-4`}
            passHref
          >
            <Anchor>Product 4</Anchor>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default StorePage;
