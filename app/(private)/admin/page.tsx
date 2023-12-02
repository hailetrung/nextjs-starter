import { auth } from "@/lib/auth";

export default async function AdminPage() {
    const sessions = await auth();
    if (!sessions) {
        console.log("Redirecting to login");
    }
    return (
        <div>
            <h1>Admin Page</h1>
        </div>
    )
}