import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { PaymentData } from "src/shared/types";
import { PaymentsView } from "src/views/payments";

interface Props {
  paymentsData: any;
}

const PAYMENT_QUERY = gql`
  query Payment($id: ID!) {
    vexness(where: { id: "clfdutqfq26cy0aw4ey5920uu" }) {
      payments(where: { id: $id }) {
        text
        id
      }
    }
  }
`;

const Payment: React.FC<Props> = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, loading, error } = useQuery(PAYMENT_QUERY, {
    variables: { id: pid },
    skip: !pid, // skip request if i don't have pid
  });
  if (data) {
    const payments: PaymentData[] = data.vexness.payments;

    return <PaymentsView payments={payments} />;
  }

  return null;
};

export default Payment;
