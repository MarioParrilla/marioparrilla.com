import { getTranslation } from "../../shared/lang/langService";
import GithubIcon from "../icons/Github";
import Tag from "../tag/Tag";

const ProjectCard = (data: { icon: string; desc: string; lang: string; web?: string; github: string; alt: string; title: string; }) => {

    return (
        <div className='flex flex-col space-y-1 shadow-md dark:shadow-zinc-700 rounded-2xl border mb-5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white bg-white min-[320px]:h-80 md:h-96 lg:h-80 min-[320px]:w-32 md:w-40 lg:w-56 px-2'>
            <div className="mt-2">
                <Tag text={data.lang} />
            </div>
            <img className='min-[320px]:h-16 md:h-36 mx-auto my-auto' src={data.icon} alt={data.alt} />
            <div className="text-center dark:bg-white bg-black dark:text-black text-white font-bold rounded-full mb-2">
                <h1 className="">
                    {data.title}
                </h1>
            </div>
            <div className="h-46 text-center">
                <p className="overflow-clip">
                    {data.desc}
                </p>
            </div>
            {data.web !== undefined
                ? <div className="flex flex-row mx-auto space-x-2">
                    <a href={data.web} target="_blank" className="cursor-pointer">
                        <div className="text-center dark:bg-white hover:bg-zinc-300 hover:text-black dark:hover:bg-black dark:hover:text-white w-12 bg-black dark:text-black text-white font-bold rounded-full mb-2">
                            <h1 className="">
                                {getTranslation("visitWeb")}
                            </h1>
                        </div>
                    </a>
                    <a href={data.github} target="_blank" className="cursor-pointer">
                        <div className="text-center hover:fill-zinc-300 hover:text-black dark:hover:fill-black dark:fill-white fill-black dark:text-black text-white font-bold rounded-full mb-2">
                            <GithubIcon size="w-6" />
                        </div>
                    </a>
                </div>
                : <a href={data.github} target="_blank" className="cursor-pointer mx-auto">
                    <div className="text-center hover:fill-zinc-300 hover:text-black dark:hover:fill-black dark:fill-white fill-black dark:text-black text-white font-bold rounded-full mb-2">
                        <GithubIcon size="w-6" />
                    </div>
                </a>

            }

        </div>
    );
}

export default ProjectCard;