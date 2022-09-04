import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  onClick: () => void;
}

function Button({ children, className, onClick }: Props): React.ReactElement {
  return <button className={className} onClick={onClick}>{children}</button>
}

export default Button;
