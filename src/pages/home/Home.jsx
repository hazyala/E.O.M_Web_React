import React from 'react';
import HeroSection from './HeroSection';
import ShowSection from './ShowSection';
import CastSection from './CastSection';
import HypeSection from './HypeSection';
import LinkSection from './LinkSection';

export default function Home() {
    return (
        <main>
            <HeroSection />

            <ShowSection />

            <CastSection />

            <HypeSection />

            <LinkSection />
        </main>
    );
}