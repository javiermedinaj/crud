
import axios from 'axios';
import { Layout } from '../components/Layout';
import Link from 'next/link';


export default function Home({ products }) {
  console.log(products);
  return (
    <Layout>


      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id} >
          <a>
            <div className="border border-gray-200 shadow-md"  >
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </a>
        </Link>
      ))}


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
