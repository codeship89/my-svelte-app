// import { env } from '$env/dynamic/private';
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request, platform }) => {
    if (platform) {
        const bucketName = "dev-svelte-app-bucket"
        const key = `${bucketName}/demo-key.jpeg`
        console.log("key - ", key)
        try {
            const res = await platform?.env.BUCKET.get(key)
            console.log("res", res)
            new Response(JSON.stringify({data: "got res"}))
        } catch (error) {
            console.log("await bucket.get error - ", error)
        }
    }

    return new Response(JSON.stringify({data: "no bucket"}))
}