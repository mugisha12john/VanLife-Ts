async function getAllVans() {
  const res = await fetch("/api/vans");
  const data = res.json();
  if (!res.ok) {
    throw new Response("Failed to load vans", { status: res.status });
  }

  return data;
}
