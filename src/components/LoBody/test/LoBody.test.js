import React from "react";
import { render } from "@testing-library/react";
import LoBody from "./LoBody";

test("Renders LoBody component for mobile", () => {
  const { getByText } = render(<LoBody mobile={true} desktop={false} />);

  const titleElement = getByText(
    "Oie!\nAcompanhe com a Loggi a entrega do seu pedido."
  );
  expect(titleElement).toBeInTheDocument();

  // Verifica elementos versão mobile.
  const formElement = getByText("Seu código de rastreamento");
  expect(formElement).toBeInTheDocument();
});

test("Renders LoBody component for desktop", () => {
  const { getByText } = render(<LoBody mobile={false} desktop={true} />);

  const titleElement = getByText(
    "Oie!\nAcompanhe com a Loggi a entrega do seu pedido."
  );
  expect(titleElement).toBeInTheDocument();

  // Verifica presença de elementos desktop
  const formElement = getByText("Seu código de rastreamento");
  expect(formElement).toBeInTheDocument();
});
