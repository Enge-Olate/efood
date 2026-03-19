import styled from 'styled-components';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 999;
  transition: opacity 0.3s ease;
`;

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100vh;
  background-color: #E66767; 
  color: #FFF;
  z-index: 1000;
  
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  
  display: flex;
  flex-direction: column;
`;

export const SidebarContent = styled.div`
  padding: 32px 8px 0 8px;
  width: 100%;
  flex: 1; 
  overflow-y: auto; 
  .emptyCart{
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
  a, button{
    max-width:354px;
    width: 100%;
  }
`;