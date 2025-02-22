export const fetchProducts = async () => {
  try {
    const data = await fetch(`${import.meta.env.VITE_BASE_URL}/products`).then(
      (res) => res.json()
    );
    return data;
  } catch (error) {
    console.error("Error while fetching products: ", error);
  }
};
