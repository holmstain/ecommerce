"use client";
import useCart from "@/hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CardCount() {
  const router = useRouter();
  const { cartProducts } = useCart();
  return (
    <div className="hidden md:flex relative cursor-pointer" onClick={() => router.push("/cart")}>
      <FaShoppingCart size="30" color="white" />
      {cartProducts?.length ? (
        <div className="absolute -top-1 -right-2 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full">
          {cartProducts?.length}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
