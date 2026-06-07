import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground(){
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return(
        <Particles id="tsparticles"
        init={particlesInit}

        options={{
            background: {
                color: {
                    value: "transparent",
                },
            },

            fpsLimit: 60,
            particles:{
                number:{
                    value:70,
                },
                color: {
                    value: "#2563eb",
                },

                links: {
                    enable: true,
                    color: "#60a5fa",
                    distance: 150,
                    opacity: 0.4,
                },

                move: {
                    enable: true,
                    speed: 1.5,
                },

                opacity:{
                    value: 0.4,
                },

                size:{
                    value:3,
                },
            },

            interactivity:{
                events:{
                    onHover:{
                        enable: true,
                        mode: "repulse",
                    },
                },
            },
        }}
    />
  );
}

export default ParticlesBackground;