const baseUrl = "https://api.unsplash.com";

export const getData = async <T>(url: string) => {
  const response = await fetch(`${baseUrl}${url}`, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data as T;
};
