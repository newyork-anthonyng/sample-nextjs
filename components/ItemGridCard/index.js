// @flow
import Link from 'next/link';

type Props = {
  id: string,
  imageSrc: string,
  price: number,
  description: string,
};

const ItemGridCard = ({ id, imageSrc, price, description }: Props) => (
  <Link href={`/item?id=${id}`}>
    <a>
      <div className="container">
        <img src={imageSrc} alt={description} />

        <div className="detailContainer">
          <span className="price">{price}</span>
          <span>{description}</span>
        </div>

        <style jsx>{`
          .container {
            border: 1px solid rgb(219, 223, 226);
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            height: 300px;
            width: 250px;
          }

          img {
            width: 100%;
          }

          .detailContainer {
            align-items: center;
            background-color: white;
            display: flex;
            flex-grow: 1;
            padding: 15px;
          }

          .price {
            margin-right: 10px;
          }

          .price:before {
            content: '$';
          }
        `}</style>
      </div>
    </a>
  </Link>
);

export default ItemGridCard;
