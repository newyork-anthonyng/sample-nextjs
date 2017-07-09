// @flow

type Props = {
  children: React$Element<*>,
};

const ItemGrid = (props: Props) => (
  <div>
    {props.children}

    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
        position: relative;
      }
    `}</style>
  </div>
);

export default ItemGrid;
