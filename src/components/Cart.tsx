import { useAppSelector } from "../hooks/useTypedSelectors";

export default function Cart() {
    const { store: { cart } } = useAppSelector((state) => state);
    return (
        <div className="flex flex-col gap-2">
            {
                cart && cart.map((c) => (
                    <div className="p-2 border border-gray-300 gap-3 grid grid-cols-5" key={c.id}>
                        <div className="flex justify-center items-center">
                            <img src={c.thumbnail} alt="" className="h-14 w-20 object-cover" />
                        </div>
                        <div className="col-span-2">
                            <h1>{c.title}</h1>
                            <h2>Price per unit : $ {c.price}</h2>
                            <h2>Total Price : $ {c.quantity ? c.quantity * c.price! : 1 * c.price!}</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 font-bold text-white text-xl">
                            <button className="rounded px-2.5 bg-green-500">+</button>
                            <button className="rounded px-3 bg-red-500 ">-</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-red-500 w-full py-2  text-white">REMOVE</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
