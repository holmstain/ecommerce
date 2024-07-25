"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import { cardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

export default function CartClient() {
  const { cartProducts, removeFromCart, removeCart, addToBasketIncrease, addToBasketDecrease } = useCart();

  if (!cartProducts || cartProducts.length == 0) {
    return <div>Sepetinizde ürün Bulunmamaktadır</div>;
  }

  let cartPrdctsTotal = cartProducts.reduce((acc: any, item: cardProductProps) => acc + item.quantity * item.price, 0);

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center border-b py-3">
          <div className="w-1/5">Ürün Resmi</div>
          <div className="w-1/5">Ürün Adı</div>
          <div className="w-1/5">Ürün Miktarı</div>
          <div className="w-1/5">Ürün Fiyatı</div>
          <div className="w-1/5"></div>
        </div>
        <div>
          {cartProducts.map((cart) => (
            <div className="flex items-center justify-between text-center my-5" key={cart.id}>
              <div className="w-1/5 flex items-center justify-center">
                <Image src={cart.image} width={70} height={70} alt="" />
              </div>
              <div className="w-1/5">{cart.name}</div>
              <div className="w-1/5">
                {" "}
                <div className="w-1/5 flex justify-center">
                  <Counter cardProduct={cart} increaseFunc={() => addToBasketIncrease(cart)} decreaseFunc={() => addToBasketDecrease(cart)} />
                </div>
              </div>
              <div className="w-1/5 text-orange-600 text-lg">{cart.price}₺</div>
              <div className="w-1/5">
                <Button text="Ürünü Sil" small outline onClick={() => removeFromCart(cart)} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-5 py-5 border-t">
          <button onClick={() => removeCart()} className="w-1/5 underline text-sm">
            Sepeti Sil
          </button>
          <div className="text-lg md:text-2xl text-orange-600 font-bold">{cartPrdctsTotal} ₺</div>
        </div>
      </PageContainer>
    </div>
  );
}