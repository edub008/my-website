import Link from 'next/link';
import Hero from '../../components/hero';

export default function FirstBlog() {
  return (
    <div>
      <Hero />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}