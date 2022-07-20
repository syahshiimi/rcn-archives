import React from 'react';
import Layout from "../components/Layout";
import { Head } from "../components/head";

import styled from "styled-components";

const CollectionsPage = () => {
    // Metadata
    const pageBlurb = (
        <p className="c-browsearchives__content">
            Browse through our carefully curated oral archives. Working with on - the
            - ground experiences, we aim to provide a wholesome and comprehensive
            approach towards understanding the cold war from a grassroots perspective.
        </p>
    );
    const {
        props: { children },
    } = pageBlurb;

    return (
        <Layout>
            <Head title={"Featured Collections"} description={children} />
            <FeaturedCollectionsWrapper>
                <h1 className='c-featuredcollections__heading'>
                    Featured Collections
                </h1>
                <p className='c-featuredcollections__blurb'>View our list of collections that we have been archiving over the past few years</p>
            </FeaturedCollectionsWrapper>
        </Layout >
    )
}


const FeaturedCollectionsWrapper = styled.main`
display: flex;
flex-direction: column;
justify-self: center;
align-items: center;

@media (min-width: 1280px) {
    
}
`;
export default CollectionsPage;

