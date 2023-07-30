// import { env } from '$env/dynamic/private';
import { PUBLIC_R2_BUCKET_NAME } from '$env/static/public';
import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request, platform }) => {
    const bucket = platform?.env.BUCKET

    if (!bucket) {
        return json({data: "no bucket"})
    }

    const key = `${PUBLIC_R2_BUCKET_NAME}/demo-key.jpeg`
    console.log("key - ", key)
    try {
        const res = await bucket.get(key)
        console.log("res", res)
    } catch (error) {
        console.log("await bucket.get error - ", error)
    }
    
    return json({data: `got bucket`})
}