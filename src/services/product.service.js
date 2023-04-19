import { listShirt, products, colors } from "@/data/product.mock";

export const productService = {
  getAllProduct() {
    return listShirt;
  },
};

export const productList = {
  getAllProduct() {
    return products;
  },
  getFeaturedProduct() {
    return products.slice(0, 3);
  }
};

export const colorList = {
  getAllColor() {
    return colors;
  }
}

