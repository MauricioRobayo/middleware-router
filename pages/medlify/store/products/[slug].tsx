import { GetServerSideProps } from "next";

interface ProductPageProps {
  slug: string;
}
const ProductPage = ({ slug }: ProductPageProps) => {
  return <div>This is the page for {slug}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  return {
    props: { slug },
  };
};

export default ProductPage;
