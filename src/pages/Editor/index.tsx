import React, { useState, useEffect } from 'react';
import { plugins } from '@alilc/lowcode-engine';
import registerPlugins from '@/components/LowcodeEngine/plugin';
import EditorView from '@/components/LowcodeEngine/EditorView';
import './index.less';

function Lowcode() {
    const [hasPluginInited, setHasPluginInited] = useState(false);
  
    useEffect(() => {
      registerPlugins()
        .then(() => {
          setHasPluginInited(true);
        })
        .catch((err) => console.error(err));
      return () => {
        plugins.dispose().then(() => {
          console.info('plugins destroy success');
        });
      };
    }, []);
  
    return (
      <div>
        {hasPluginInited && <EditorView />}
      </div>
    );
}

export default Lowcode;
