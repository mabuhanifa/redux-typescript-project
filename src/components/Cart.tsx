import { useAppSelector } from "../hooks/useTypedSelectors";

export default function Cart() {
    const { store: { cart } } = useAppSelector((state) => state);
    return (
        <div>Cart</div>
    )
}
