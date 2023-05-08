import useButtonStore from "../../utils/useButtonStore";
import InvoiceForm from "Components/InvoicesPage/InvoiceForm"

export default function ButtonOpenInvoiceForm({handleToggleForm}) {
  const isVisible = useButtonStore((state) => state.isVisible);
  const toggleVisibility = useButtonStore((state) => state.toggleVisibility);

  return (
    <div className="place-items-center w-full flex flex-col">
      <button
        name="button"
        className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
        onClick={handleToggleForm}
      >
        Add to Invoice
      </button>
      {/* {isVisible && <InvoiceForm />} */}
    </div>
  );
}