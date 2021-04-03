import { useEffect, useState } from "react";

export const useNetworkStatus = () => {
  const [state, setState] = useState(true);

  const onOnlineEvent = () => {
    setState(navigator.onLine);
  };

  const onOfflineEvent = () => {
    setState(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", onOnlineEvent);
    window.addEventListener("offline", onOfflineEvent);

    return () => {
      window.removeEventListener("online", onOnlineEvent);
      window.removeEventListener("offline", onOfflineEvent);
    };
  });

  return state;
};
