import { ReactNode } from 'react';
import Header from './header/Header';

type LayoutProps = {
    children: ReactNode ,
  };

const  Layout = ({ children }: LayoutProps) => {
    return (
        <>
        <Header/>
        <div style={{ paddingTop:68,top: 40}}>
        <div>  Head text </div>
        <main>{children}</main>
        <div>  Footer text </div>
        </div>
      </>
    )
  }
export default Layout;  