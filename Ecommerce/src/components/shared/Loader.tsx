import { IconRefresh } from '@tabler/icons-react';

export const Loader = () => {
  return (
  <div className="flex items-center justify-center h-screen">
    <IconRefresh size={70} className="animate-spin" />
  </div>
  );
};