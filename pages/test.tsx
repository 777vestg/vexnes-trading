import React from "react";
import { gql, useQuery } from "@apollo/client";
import { PaymentData } from "src/shared/types";
import Link from "next/link";

const PAYMENT_QUERY = gql`
  query Vestas {
    vexness(where: { id: "clfdutqfq26cy0aw4ey5920uu" }) {
      payments {
        text
        id
      }
    }
  }
`;

const TestPage: React.FC = () => {
  const { data, loading, error } = useQuery(PAYMENT_QUERY);
  if (data) {
    const payments: PaymentData[] = data.vexness.payments;
    return (
      <div>
        {payments.map((item: PaymentData, index) => (
          <Link key={item.id} href={`/payments/${item.id}`}>
            <a>Payment {index}</a>
          </Link>
        ))}
      </div>
    );
  }
  return null;
};

export default TestPage;
