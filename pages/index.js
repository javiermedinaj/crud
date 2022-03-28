
import axios from 'axios';
import { Layout } from '../components/Layout';



export default function Home({ products }) {
  console.log(products);
  return (
    <Layout>


      {products.map(product => (
        <div key={product.id} >
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
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
