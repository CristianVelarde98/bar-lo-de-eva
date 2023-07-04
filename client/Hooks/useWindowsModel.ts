import { useState } from 'react';

// TODO mover los tipados

type TUseWindowsModel = [boolean, () => void, () => void];

const useWindowsModel = (initialStatus: boolean): TUseWindowsModel => {
  const [isOpen, setOpen] = useState<boolean>(initialStatus);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return [isOpen, handleOpen, handleClose];
};

export default useWindowsModel;
