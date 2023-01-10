import { useAppSelector } from "../hooks/useTypedSelectors";

export default function Cart() {
    const { store: { cart } } = useAppSelector((state) => state);
    return (
        <div className="flex flex-col">
            {
                cart && cart.map((c) => (
                    <div className="p-5" key={c.id}>
                        <h1>{c.title}</h1>
                        <h2>Price per unit : {c.price}</h2>
                        <h2>Total Price {c.quantity ? c.quantity * c.price! : 1 * c.price!}</h2>
                    </div>
                ))
            }
        </div>
    )
}
