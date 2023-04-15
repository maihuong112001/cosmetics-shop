import { productCardsService } from "@/services/productsInCard.service";
import { Link } from "react-router-dom";
function InvoicePaying() {
  const dataProductsCard = productCardsService.getAllProductCard();
  return (
    <div className="flow-root">
      <ul className="-my-6 divide-y divide-gray-200">
        {dataProductsCard.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-[75px] w-[75px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-[14px] text-base font-medium text-gray-900">
                  <h3>
                    <Link to="/">{product.name}</Link>
                  </h3>
                  <p className="ml-4 mr-3">{product.price}</p>
                </div>
                <p className="mt-1 text-[13px] text-gray-500">
                  {product.color}
                </p>
              </div>
              <div className="flex flex-1 items-end justify-between text-[12px]">
                <p>qty: {product.quantity}</p>

                <div className="flex">
                  <button
                    type="button"
                    className="text-[12px] font-medium text-indigo-600 hover:text-indigo-500 mr-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6">
        <p className="text-2xl">Subtotal </p>
        <p className="font-semibold text-2xl">$262.00</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl">Shipping </p>
        <p className="text-lg text-gray-500">Calculated at next step</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl">Estimated taxes </p>
        <p className="font-semibold text-2xl">$48.84</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl font-semibold">Total </p>
        <div className="flex">
          <p className="text-2xl text-gray-500 mr-2">USD</p>
          <p className="font-semibold text-2xl ml-2"> $537.28</p>
        </div>
      </div>
    </div>
  );
}

export default InvoicePaying;
