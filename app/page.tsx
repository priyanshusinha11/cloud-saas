import Link from "next/link";
import { VideoIcon, CropIcon, UserPlusIcon, LogInIcon, HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-grey-900 text-white">
      <div className="space-y-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-100">Welcome to Cloudify</h1>
        <p className="text-lg text-blue-200">
          Transform your media with AI-driven video compression and smart image cropping.
        </p>
        <p className="text-lg text-blue-200">
          Preserve quality, save space, and highlight what's important.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Link href="/home" passHref>
            <button className="btn btn-primary flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 text-white">
              <HomeIcon />
              <span>Home</span>
            </button>
          </Link>

          <Link href="/sign-up" passHref>
            <button className="btn btn-secondary flex items-center space-x-2 bg-green-700 hover:bg-green-600 text-white">
              <UserPlusIcon />
              <span>Sign Up</span>
            </button>
          </Link>

          <Link href="/sign-in" passHref>
            <button className="btn btn-secondary flex items-center space-x-2 bg-purple-700 hover:bg-purple-600 text-white">
              <LogInIcon />
              <span>Sign In</span>
            </button>
          </Link>
        </div>

        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-2">
            <VideoIcon className="text-3xl text-blue-400" />
            <p className="text-blue-200">Compress videos with AI-driven quality retention.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-2">
            <CropIcon className="text-3xl text-blue-400" />
            <p className="text-blue-200">Smartly crop images to the perfect aspect ratio, focusing on what's important.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
