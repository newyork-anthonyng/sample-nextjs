import Link from 'next/link';
import Headspace from 'react-headspace';

export default () => (
  <Headspace scrollTolerance={20}>
    <header>
      <style jsx>{`
        header {
          align-items: center;
          background-color: #E03B42;
          color: white;
          display: flex;
          height: 30px;
        }
      `}</style>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  </Headspace>
);
