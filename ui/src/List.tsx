import { ReactElement } from "react";

import { Client } from "./TRPC";

export function List(): ReactElement {
  const bookings = Client.getBookings.useQuery({});

  return (
    <div className="flex flex-col">
      {bookings.data?.map((booking, index) => {
        return (
          <div key={index} className="flex flex-row">
            <div className="flex-1">Date: {booking.start.toISOString()}</div>
            <div className="flex-1">Staff: {booking.staffName}</div>
            <div className="flex-1">Customers: {booking.customers.length}</div>
          </div>
        );
      })}
    </div>
  );
}
