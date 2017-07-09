import Link from 'next/link';
import HeaderLayout from '../HeaderLayout';

export default () => (
  <HeaderLayout>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/messages">
        <a>Messages</a>
      </Link>
    </div>
  </HeaderLayout>
);
