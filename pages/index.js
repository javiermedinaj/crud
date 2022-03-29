
import axios from 'axios';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import { ProductCard } from '../components/ProductCard';

export default function Home({ products }) {
  console.log(products);
  return (
    <Layout>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />))}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get('http://localhost:3000/api/products');

  return {
    props: {
      products,
    }
  }
}
