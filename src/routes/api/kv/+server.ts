import type { RequestHandler } from "@sveltejs/kit";


export const GET: RequestHandler = async ({ request, platform }) => {
    const key = "Task:123"
    const task = await platform?.env.TODO_LIST.get(key)    
    console.log("task - ", task);
    if (task === null) {
        return new Response("Value not found", { status: 404 });
    } 
    console.log("task", task)
    return new Response(JSON.stringify(task))
}