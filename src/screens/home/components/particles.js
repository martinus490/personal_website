import Particles, { circleBounce } from "react-tsparticles"

function Particle() {
    return (
        <Particles params={
            {
                fpsLimit: 120,
                background: {
                    color: "#ffffff"
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse"
                        }
                    }
                },
                particles: {
                    number: {
                        value: 60
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
                        speed: 0.5,
                        outModes: {
                            default: "bounce"
                        }
                    },
                    opacity: {
                        value: 0.3
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
