import React from 'react';
import { createRoot } from 'react-dom/client';

import AppHolder from './components/AppHolder.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<AppHolder />);
