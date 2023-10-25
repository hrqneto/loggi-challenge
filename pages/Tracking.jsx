import * as React from 'react';
import Header from '../src/components/LoLayout/Header';
import PageTracking from '../src/components/LoPageTracking/LoPageTracking';
import Footer from '../src/components/LoLayout/Footer';
import { getItem } from '../src/utils/storage';
import Head from '../src/components/LoLayout/Head';

export default function Tracking() {
    const getId = getItem("id");
    return (
        <>
            <Header />
            <Head tracking />
            {getId && (
                <PageTracking trackingId={getId} />
            )}
            <Footer />
        </>
    );
}