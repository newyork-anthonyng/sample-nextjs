import Link from 'next/link';
import HeaderLayout from '../HeaderLayout';

export default () => (
  <HeaderLayout>
    <div className="container">
      <div>
        <Link href="/">
          <div>
            <a className="min">Home</a>
            <a className="max">Go Home</a>
          </div>
        </Link>
      </div>

      <span className="min">Chatting with Name</span>

      <div>
        <Link as="/me" href="/profile">
          <h3 className="min">Profile</h3>
        </Link>
        <Link as="/me" href="/profile">
          <h3 className="max">My Profile</h3>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: space-between;
      }

      .max {
        display: none;
      }

      @media (min-width: 600px) {
        .min {
          display: none;
        }

        .max {
          display: initial;
        }
      }
    `}</style>
  </HeaderLayout>
);
