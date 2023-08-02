import { ProductCard as ProductCardHOC } from "./ProductCard";

// export { ProductCard } from "./ProductCard";
import { ProductTitle } from "./PoductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductTitle } from "./PoductTitle";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {

    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,

})

export default ProductCard