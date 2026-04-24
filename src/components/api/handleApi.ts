  interface datas{
  vans: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: "simple" | "rugged" | "luxury";
  };
  }
export async function getAllVans():Promise<datas> {
  const res = await fetch("/api/vans");
  const data = res.json();
  if (!res.ok) {
    throw new Response("Failed to load vans", { status: res.status });
  }

  return data;
}
