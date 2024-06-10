import { AppConstants } from "@src/constants";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000
    }
  }
});

export const ReactQueryProvider = ({ children }: RcProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {AppConstants.isDevelopmentMode && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      )}
    </QueryClientProvider>
  );
};
