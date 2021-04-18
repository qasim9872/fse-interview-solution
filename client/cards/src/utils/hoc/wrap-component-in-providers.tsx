import * as React from 'react';

const WrapComponentInProvidersHoc = (
  Root: React.FC<{}>,
  providers: React.FC<{}>[],
) => {
  const loc: React.FC<{}> = () => {
    let app = <Root />;

    for (const Provider of providers) {
      app = <Provider>{app}</Provider>;
    }

    return app;
  };

  return loc;
};

export default WrapComponentInProvidersHoc;
