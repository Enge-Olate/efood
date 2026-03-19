import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/appSelector";
import { useAppDispatch } from "../../hooks/appDispatch";
import { close } from "../../store/reducers/cart";
import { CheckoutLayout } from "../CheckoutLayout";

export default function CheckoutLayoutWrapper() {
  const { isOpen } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(close());
    navigate("/");
  };

  return (
    <CheckoutLayout isOpen={isOpen} onClose={handleClose}>
      <Outlet />
    </CheckoutLayout>
  );
}
