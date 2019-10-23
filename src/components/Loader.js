import React from 'react';
import { createPortal } from 'react-dom';

const LOADER_ROOT = document.querySelector('#loader-root');

const Loader = () => createPortal(<div>Loading...</div>, LOADER_ROOT);

export default Loader;
