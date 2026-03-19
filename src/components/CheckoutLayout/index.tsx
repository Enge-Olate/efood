import React from 'react';
import { Overlay, SidebarContainer, SidebarContent } from './style';

interface CheckoutLayoutProps {
  isOpen: boolean;       
  onClose: () => void;   
  children: React.ReactNode; 
}

export const CheckoutLayout = ({ isOpen, onClose, children }: CheckoutLayoutProps) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <SidebarContent>
          {children}
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};