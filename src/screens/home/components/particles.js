import Particles, { circleBounce } from "react-tsparticles"

function Particle() {
    return (
        <Particles params={
            {
                fpsLimit: 120,
                background: {
                    color: "#ffffff"
                },
                particles: {
                    number: {
                        value: 30
                    },
                    shape: {
                        type: circleBounce
                    },
                    color: {
                        value: [
                            "#3998D0",
                            "#2EB6AF",
                            "#A9BD33",
                            "#FEC73B",
                            "#F89930",
                            "#F45623",
                            "#D62E32",
                            "#EB586E",
                            "#9952CF"
                        ]
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        outModes: {
                            default: "bounce"
                        }
                    },
                    opacity: {
                        value: 0.5
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 7
                        }
                    }
                }
            }
        } />
    )
}

export default Particle
