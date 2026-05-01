export async function POST(req: Request) {
  const API = process.env.NEXT_PUBLIC_BACKEND_API + "EmailNotification";
  const SECRET = process.env.NEXT_PUBLIC_BACKEND_SECRET;

  const body = await req.formData();

  const res = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SECRET}`,
    },
    body,
  });

  if (!res.ok) {
    console.log(res);
    return new Response("Failed to send", { status: 500 });
  }

  return new Response("Success");
}