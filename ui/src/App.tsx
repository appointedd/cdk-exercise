import { ReactElement } from "react";
import { TRPCProvider } from "./TRPCProvider";

import { List } from "./List";

export function App(): ReactElement {
  return (
    <TRPCProvider>
      <List />
    </TRPCProvider>
  );
}

export default App;
