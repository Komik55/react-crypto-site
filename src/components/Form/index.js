import React from "react";
import { Button } from "../Elements";
const Tinkoff = () => {
  const tinkoffPayment = (e) => {
    e.preventDefault();
    window.pay(e.target);
  };
  return (
    <form name="TinkoffPayForm" onSubmit={(e) => tinkoffPayment(e)}>
      <input type="hidden" name="terminalkey" value="1638703269376DEMO" />
      <input type="hidden" placeholder="Описание заказа" name="description" />
      <input
        type="hidden"
        placeholder="Сумма"
        name="amount"
        value={111111}
        required
      />
      <Button type="submit" style={{ width: "100%" }}>
        Оплатить
      </Button>
    </form>
  );
};
export default Tinkoff;
