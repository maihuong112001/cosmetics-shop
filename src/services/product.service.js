import { listShirt, products } from "@/data/product.mock";

export const productService = {
  getAllProduct() {
    return listShirt;
  },
};

export const productList = {
  getAllProduct() {
    return products;
  },
};
