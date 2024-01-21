import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// StoreProvider component for providing Redux store and persistence
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use useRef to ensure store and persistor are created only once
  const storeRef = useRef<AppStore | null>(null);

  // If the store is not initialized, create it using makeStore
  if (!storeRef.current) {
    const { store, persistor } = makeStore(); // Destructure store and persistor
    storeRef.current = { store, persistor };
  }

  // Render the Provider and PersistGate components
  return (
    <Provider store={storeRef.current?.store}>
      {/* PersistGate to persist and rehydrate the store */}
      <PersistGate loading={null} persistor={storeRef.current?.persistor}>
        {/* Render children only after persistence is complete */}
        {() => children}
      </PersistGate>
    </Provider>
  );
}
