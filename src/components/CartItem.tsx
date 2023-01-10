import { useDispatch } from 'react-redux';
import { changeQuantity, ProductType, removeFromCart } from '../redux/features/storeSlice';
import { AppDispatch } from '../redux/store/store';
type PropsType = {
    cart: ProductType
}
const defaultProps = {
    quantity: 1,
};

export default function CartItem(props: PropsType) {
    const { cart } = props;
    const dispatch = useDispatch<AppDispatch>();
    const changeQty = (id: number, qty: number = 1) => {
        console.log(id, qty);
        dispatch(changeQuantity({
            id: id,
            quantity: qty
        }))
    }
    return (
        <div className="p-2 border border-gray-300 gap-3 grid grid-cols-5" key={cart.id}>
            <div className="flex justify-center items-center">
                <img src={cart.thumbnail} alt="" className="h-14 w-20 object-cover" />
            </div>
            <div className="col-span-2">
                <h1>{cart.title}</h1>
                <h2>Price per unit : $ {cart.price}</h2>
                <h2>Selected Quantity : {cart.quantity ? cart.quantity : 1}</h2>
                <h2>Total Price : $ {cart.quantity ? cart.quantity * cart.price! : 1 * cart.price!}</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 font-bold text-white text-xl">
                <button className="rounded px-2.5 bg-green-500"
                    onClick={() => changeQty(cart.id, cart.quantity && cart.quantity + 1)}

                >+</button>
                <button className="rounded px-3 bg-red-500 "

                    onClick={() => changeQty(cart.id, cart.quantity && cart.quantity - 1)}
                >-</button>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-red-500 w-full py-2  text-white"
                    onClick={() => dispatch(removeFromCart({ id: cart.id }))}
                >REMOVE</button>
            </div>
        </div>
    )
}

CartItem.defaultProps = defaultProps;