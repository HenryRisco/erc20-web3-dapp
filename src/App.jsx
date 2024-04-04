import { AppLayout } from "./components/ui/layouts";
import { Home } from "./pages";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { config } from "./config/wagmi";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <WagmiConfig config={config}>
      <Toaster position="bottom-right" />
      <ConnectKitProvider mode="light">
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
