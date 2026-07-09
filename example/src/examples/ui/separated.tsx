import { Children, Fragment, type ReactNode } from 'react';

export function Separated({
  separator,
  children,
}: {
  separator: ReactNode;
  children: ReactNode;
}) {
  const items = Children.toArray(children);

  return (
    <>
      {items.map((child, i) => (
        <Fragment key={i}>
          {i > 0 ? separator : null}
          {child}
        </Fragment>
      ))}
    </>
  );
}
