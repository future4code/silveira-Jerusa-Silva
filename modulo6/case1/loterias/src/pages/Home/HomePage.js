import React from "react";
import { Divider, PageContent } from "../../assets/styles/HomePage/HomeStyle";
import LoteryArea from "../../components/LoteryArea/LoteryArea";
import SortingNumber from "../../components/SortingNumber/SortingNumber";


const HomePage = () => {
    return (
        <PageContent>
            <LoteryArea/>
            <Divider/>
            <SortingNumber/>
        </PageContent>
    )
};

export default HomePage;