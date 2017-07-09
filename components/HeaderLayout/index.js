// @flow
import Headspace from 'react-headspace';

type Props = {
  children: React$Element<any>,
};

export default ({ children }: Props) => (
  <Headspace scrollTolerance={10} showAtBottom={false}>
    <header>
      <style jsx>{`
        header {
          align-items: center;
          background-color: #E03B42;
          color: white;
          display: flex;
          height: 30px;
          z-index: 100;
        }
      `}</style>
      {children}
    </header>
  </Headspace>
);
