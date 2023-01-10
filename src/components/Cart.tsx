import { useAppSelector } from "../hooks/useTypedSelectors";
import CartItem from "./CartItem";

export default function Cart() {
    const { store: { cart } } = useAppSelector((state) => state);
    return (
        <div className="flex flex-col gap-2">
            {
                cart && cart.map((cart) => <CartItem cart={cart} key={cart.id} />
                )
            }
        </div>
    )
}
