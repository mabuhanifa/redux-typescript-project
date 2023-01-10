import { useAppSelector } from "../hooks/useTypedSelectors";

export default function Cart() {
    const { store: { cart } } = useAppSelector((state) => state);
    return (
        <div className="flex flex-col gap-2">
            {
                cart && cart.map((c) => (
                    <div className="p-5 border border-gray-300 flex gap-5" key={c.id}>
                        <div className="flex justify-center items-center"><img src={c.thumbnail} alt="" className="h-14 w-20 object-cover" /></div>
                        <div>
                            <h1>{c.title}</h1>
                            <h2>Price per unit : $ {c.price}</h2>
                            <h2>Total Price : $ {c.quantity ? c.quantity * c.price! : 1 * c.price!}</h2>
                        </div>
                        <div className="flex flex-col">
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
