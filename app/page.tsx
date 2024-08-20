import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to Cloudify</h1>

        <div className="flex space-x-4">
          <Link href="/home" passHref>
            <button className="btn btn-primary">Home</button>
          </Link>

          <Link href="/sign-up" passHref>
            <button className="btn btn-secondary">Sign Up</button>
          </Link>

          <Link href="/sign-in" passHref>
            <button className="btn btn-secondary">Sign In</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
