import type { Paise } from "@praman/shared";

export interface ExecOutcome {
  readonly order_id: string;
  readonly status: "created" | "captured" | "failed";
  readonly amount_paise: Paise;
  readonly payment_id: string | null;
  readonly failure_code: string | null;
}

export interface Executor {
  createOrder(amountPaise: Paise, receipt: string): Promise<ExecOutcome>;
  findByReceipt(receipt: string): Promise<ExecOutcome | null>;
  capture(paymentId: string, amountPaise: Paise): Promise<ExecOutcome>;
}
