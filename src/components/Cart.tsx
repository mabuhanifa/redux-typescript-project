import { useAppSelector } from "../hooks/useTypedSelectors";
import CartItem from "./CartItem";

export default function Cart() {
    const { store: { cart } } = useAppSelector((state) => state);
    const totalPrice = cart.reduce((a, c) => a + ((c.price ? c.price : 1) * (c.quantity ? c.quantity : 1)), 0)
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-center font-bold text-2xl">Grand Total : {totalPrice}</h1>

            {
                cart && cart.map((cart) => <CartItem cart={cart} key={cart.id} />
                )
            }
        </div>
    )
}
