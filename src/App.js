import React from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'
import Tabledata from './Tabledata';

const queryClient = new QueryClient();
function App() {
  return (
  <div>
  <QueryClientProvider client={queryClient}>
    <Tabledata />
  </QueryClientProvider>
  </div>
  );
}

export default App;