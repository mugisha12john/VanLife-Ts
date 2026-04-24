interface datas {
  vans: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: "simple" | "rugged" | "luxury";
  };
}
export async function getAllVans(): Promise<datas> {
  const res = await fetch("/api/vans");
  const data = res.json();
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}



export async function vanDetailLoader({ params }: { params: { id: string } }):Promise<datas> {
  const res = await fetch(`/api/vans/${params.id}`);
  if (!res.ok) {
    throw new Response("Failed to load van detail", { status: res.status });
  }
  return res.json();
}

export async function hostVansLoader():Promise<datas> {
  const res = await fetch("/api/host/vans");
  if (!res.ok) {
    throw new Response("Failed to load host vans", { status: res.status });
  }
  return res.json();
}
