import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./ParticlesConfig.js";


const ParticlesBackground = ( config ) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
            /* options={config} */
            className="h-full w-full z-10"
       
        />
    );
};

export default ParticlesBackground;