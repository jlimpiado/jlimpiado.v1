import {
    Card,
    Highlight,
    Nav,
    // TextSlider
} from "@/app/components";
import {CardPropsType, CardType} from "@/app/types";
import MailIcon from "@/app/icons/Mail.svg";
import GithubIcon from "@/app/icons/Github.svg";
import LinkedinIcon from "@/app/icons/Linkedin.svg";
import PomoImg from '@assets/pomo.png';
import JLImg from "@assets/jlimpiadov1.png";
import WeatherImg from "@assets/weather-app.png";
import ExternalLinkIcon from "@/app/icons/External_link.svg";

const links = [
    {
        Icon: MailIcon,
        href: "mailto:jblimpiado@gmail.com",
    },
    {
        Icon: GithubIcon,
        href: "https://github.com/jlimpiado",
    },
    {
        Icon: LinkedinIcon,
        href: "https://www.linkedin.com/in/joshua-limpiado-2000/",
    },
]

const experiences: CardPropsType[] = [
    {
        type: CardType.EXP,
        title: "Front-end Development Specialist | DSSE",
        externalLink: "https://dsseservices.com/dynamic-solutions",
        description: <><Highlight>Design</Highlight>, <Highlight>develop</Highlight>,
            and <Highlight>enhance</Highlight> features, functionalities, and user
            interfaces. <Highlight>Maintaining</Highlight> and <Highlight>optimization</Highlight> the
            existing project. Attending to the demands’ requirements to make the critical components
            of the project <Highlight>work</Highlight> and <Highlight>function</Highlight>. While
            simultaneously cultivate
            a <Highlight>positive</Highlight> and <Highlight>healthy</Highlight> working
            environment.</>,
        tags: ['ReactJS', 'Typescript', 'Javascript', 'SCSS'],
        years: ['2022', '2024']
    }
]

const projects: CardPropsType[] = [
    {
        type: CardType.PROJ,
        title: "POMO",
        externalLink: "https://jbl-pomo.vercel.app",
        description: <>Web app for those who uses and will be using the <Highlight>Pomodoro
            technique</Highlight> to do productive works.</>,
        tags: ['ReactJS', 'Typescript', 'Javascript', 'CSS'],
        imgUrl: PomoImg
    },
    {
        type: CardType.PROJ,
        title: "jlimpiado.v1",
        description: <>My personal portfolio website. Color picked and designed by yours truly,
            added some revisions and personal flavors but heavily inspired by <Highlight>Brittany
                Chiang’s</Highlight> portfolio website.</>,
        tags: ['ReactJS', 'Typescript', 'NextJS', 'TailwindCSS'],
        imgUrl: JLImg
    },
    {
        type: CardType.PROJ,
        title: "Weather APP",
        externalLink: "https://jbl-weather-react-project.netlify.app/",
        description: <>One of my first beginner projects where I build a Weather checker web
            application. It uses Openweathermap’s free API to search for the city and it’s weather
            for the week.</>,
        tags: ['ReactJS', 'Typescript', 'ViteJS', 'TailwindCSS'],
        imgUrl: WeatherImg
    },
]

export default function Home() {
    return (
        <main className="min-h-screen max-w-screen-xl lg:px-24 px-4 mx-auto grid place-items-center font-[family-name:var(--font-poppins-regular)]">
            {/*<section className="h-screen grid place-items-center">*/}
            {/*    <h1 className="flex items-baseline gap-[0.05em] font-[family-name:var(--font-josefin-slab)] text-midnight-50 text-[70px]">*/}
            {/*        J<TextSlider text={"OSHUA"}/>L<TextSlider text={"IMPIADO"}/>*/}
            {/*    </h1>*/}
            {/*</section>*/}
            <section className="lg:flex min-h-screen">
                <header className="lg:sticky lg:top-0 lg:w-[48%] max-h-screen py-20 flex flex-col justify-between">
                    <section>
                        <div className="mb-[30px]">
                            <h2 className="font-[family-name:var(--font-josefin-slab)] text-6xl text-midnight-50">JL</h2>
                            <p className="text-midnight-50">FRONT-END DEVELOPER</p>
                        </div>
                        <Nav/>
                    </section>
                    <div className="flex lg:flex-col gap-[30px]">
                        {
                            links.map((link, idx) => (
                                <a key={`${link}@${idx}`} href={link.href}>
                                    <link.Icon className="hover:text-midnight-50" />
                                </a>
                            ))
                        }
                    </div>
                </header>
                <section className="lg:w-[52%] py-20 flex flex-col gap-[200px]">
                    <div data-nav="about">
                        <p>
                            Hi there! My name is Joshua Limpiado, and I’m a Front-end Developer, <Highlight>for now
                            (&gt;ᴗ•)</Highlight>.<br/><br/>
                            Keeping myself <Highlight>curious</Highlight> is what keeps me going in tackling this field.
                            I
                            have been a Front-end developer for <Highlight>2 years </Highlight>now, but still has a lot
                            to
                            learn. Several things I learned in the projects I worked on; not all new things
                            are <Highlight>stable
                            and usable</Highlight> but it’s not bad to <Highlight>learn and try it out</Highlight> also,
                            developers are <Highlight>scientists</Highlight> after all,
                            heheh; <Highlight>maintaining</Highlight> and <Highlight>optimizing</Highlight> comes in
                            pair;
                            lastly, <Highlight>UI/UX</Highlight> are not
                            everything, <Highlight>functionality</Highlight> and <Highlight>performance</Highlight> seal
                            the
                            deal.<br/><br/>
                            Now, currently in search for an environment where I can let my thoughts be free and explore
                            the
                            vast world of tech. Offer clear insights and demonstrate strong skills to produce and
                            develop <Highlight>usable</Highlight> and <Highlight>impactful</Highlight>.
                        </p>
                    </div>
                    <div data-nav="experiences">
                        {
                            experiences.map((experience, idx) => (
                                <Card key={`${idx}-${experience.title}`}{...experience} />
                            ))
                        }
                        <a
                            className="flex items-center gap-2.5 hover:text-midnight-800 hover:underline px-[25px] mt-[24px]"
                            href="/jblimpiado_cv.pdf"
                            target="_blank"
                        >
                            Wanna see my CV? <ExternalLinkIcon/>
                        </a>
                    </div>
                    <div data-nav="projects" className="flex flex-col gap-5">
                        {
                            projects.map((project, idx) => (
                                <Card key={`${idx}-${project.title}`} {...project} />
                            ))
                        }
                    </div>
                </section>
            </section>
        </main>
    )
}
