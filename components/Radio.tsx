import React from "react";

function Radio() {
  return (
    <div>
      <fieldset className="grid grid-cols-2 gap-4">
        <legend className="sr-only">Delivery</legend>

        <div>
          <label
            htmlFor="DeliveryStandard"
            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
          >
            <div>
              <p className="text-gray-700">Standard</p>

              <p className="mt-1 text-gray-900">Free</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryStandard"
              id="DeliveryStandard"
              className="size-5 border-gray-300 text-blue-500"
              checked
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="DeliveryPriority"
            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
          >
            <div>
              <p className="text-gray-700">Next Day</p>

              <p className="mt-1 text-gray-900">£9.99</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryPriority"
              id="DeliveryPriority"
              className="size-5 border-gray-300 text-blue-500"
            />
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default Radio;
