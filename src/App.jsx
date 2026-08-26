import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import AppRouter from './routes/AppRouter.jsx';

function App() {

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <AppRouter />
    </>
  )
}

export default App
