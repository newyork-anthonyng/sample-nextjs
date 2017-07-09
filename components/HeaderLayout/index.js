// @flow
import Headspace from 'react-headspace';

type Props = {
  children: React$Element<any>,
};

export default ({ children }: Props) => (
  <Headspace scrollTolerance={10}>
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
      {children}
    </header>
  </Headspace>
);
