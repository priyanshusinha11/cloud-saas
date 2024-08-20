import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-grey-900 text-blue-100">
            <div className="w-full max-w-md p-8 bg-blue-100 rounded-lg shadow-lg">
                <SignUp />
            </div>
        </main>
    );
}
