"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment";
import useCart from "@/hooks/useCart";
import Counter from "../general/Counter";

export type cardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

export default function DetailClient({ product }: { product: any }) {
  const { productCartQty, addToBasket, cartProducts } = useCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<cardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  useEffect(() => {
    setDisplayButton(false);
    let controlDisplay: any = cartProducts?.findIndex((cart) => cart.id == product.id);
    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cartProducts, product.id]);

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  let productRating = product?.reviews?.reduce((acc: number, item: any) => item.rating, 0) / product?.reviews.length;

  console.log(cartProducts);
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] w-[200px] md:w-[400px] md:h-[400px] mb-3 md:mb-0">
            <Image src={product?.image} fill alt="" />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>Stok Durumu</div>
              {product.inStock ? (
                <div className="text-green-500">Ürün Stokta Mevcut</div>
              ) : (
                <div className="text-red-500">Ürün Stokta Bulunmamaktadır</div>
              )}
            </div>
            <div>
              <div className="text-lg md:text-2xl text-orange-600 font-bold">{product.price}₺</div>
              {displayButton ? (
                <>
                  <Button text="Ürün Sepete Ekli" small outline onClick={() => {}} />
                </>
              ) : (
                <>
                  <Counter cardProduct={cardProduct} increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} />

                  <Button text="Sepete Ekle" small onClick={() => addToBasket(cardProduct)} />
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          {product?.reviews?.map((product: any) => (
            <Comment key={product.id} product={product} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}