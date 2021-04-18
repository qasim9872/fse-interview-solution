/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useContext, useState } from 'react';

const ProviderWithContextHoc = <T extends { [key: string]: any }>(
  defaults: T,
) => {
  const context: React.Context<
    [T, React.Dispatch<React.SetStateAction<T>> | (() => {})]
  > = React.createContext([defaults, () => {}] as any);

  const useHook = () => useContext(context);

  const Provider: React.FC = ({ children }) => {
    const state = useState(defaults);
    return <context.Provider value={state}>{children}</context.Provider>;
  };

  return { Provider, useHook };
};

export default ProviderWithContextHoc;
