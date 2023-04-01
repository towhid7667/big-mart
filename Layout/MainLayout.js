import React from 'react';
import Header from "@component/src/components/Header/Header";
import Footer from "@component/src/components/Footer/Footer";

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;