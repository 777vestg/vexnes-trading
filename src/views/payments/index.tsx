import { Card, CardContent, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";
import classNames from "classnames";
import React from "react";
import { PaymentData } from "src/shared/types";
import styles from "./styles.module.scss";

interface Props {
  payments: PaymentData[];
}

export const PaymentsView: React.FC<Props> = (props) => {
  const { payments } = props;

  return (
    <div className={styles.wrapper}>
      <Card className={styles.popup} sx={{ minWidth: 275, maxWidth: 850 }}>
        <CardContent className={styles.list}>
          {payments[0].text.split("\n").map((item, index) => (
            <p key={`${item}_${index}`}>{item}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
