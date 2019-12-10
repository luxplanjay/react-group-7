import React, { useState, lazy, Suspense } from 'react';
import Spinner from '../../common/Spinner';
// import Loadable from 'react-loadable'

// const Editor = Loadable({
//   loader: () => import('./Editor' /* webpackChunkName: "editor-view" */),
//   loading: Spinner,
// });

const Editor = lazy(() =>
  import('./Editor' /* webpackChunkName: "editor-view" */),
);

const HomeView = () => {
  const [editorVisible, setEditorVisible] = useState(false);

  return (
    <div>
      <h1>Home page</h1>

      {editorVisible ? (
        <Suspense fallback={<Spinner />}>
          <Editor />
        </Suspense>
      ) : (
        <button type="button" onClick={() => setEditorVisible(true)}>
          Show editor
        </button>
      )}
    </div>
  );
};

export default HomeView;
