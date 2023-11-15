import React, { PropsWithChildren } from "react";
import Head from "next/head";
import metadata from "../utils/metadata";
import { Metadata } from "next";

interface MetaHeadProps {
    title: string;
    url?: string;
}

function MetaHead({ title }: PropsWithChildren<MetaHeadProps>) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metadata.description}></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content="/logoitdri/logo-192.png" />
            <meta property="og:image" itemProp="image" content="/logoitdri/logo-192.png"></meta>
            <meta property="og:type" content="website" />

            {/* twitter */}
            <meta property="twitter:card" content="/logoitdri/logo-192.png" />
            <meta property="twitter:title" content={metadata.title} />
            <meta property="twitter:description" content={metadata.description} />
            <meta property="twitter:image" content="/logo/logo-192.jpg" />

            <meta property="whatsapp:number" content="" />
            <meta property="instagram:username" content="" />
            <meta property="discord:server" content="" />
        </Head>
    );
}

export default MetaHead;
