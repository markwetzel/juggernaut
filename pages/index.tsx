import Layout from '../components/Layout';
// import Link from 'next/link';
// import Tabs from '../components/Tabs';
import Tabs2 from '../components/Tabs2';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    {/* <Tabs /> */}
    <Tabs2 />
    {/* <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p> */}
  </Layout>
);

export default IndexPage;
