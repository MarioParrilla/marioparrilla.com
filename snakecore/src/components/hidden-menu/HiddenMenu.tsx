import { Link } from "react-router-dom";
import { Feature } from "../../types/feature";
import Social from "../social/Social";
import downArrow from '../../assets/down_arrow.svg';

const HiddenMenu = (data: { features: Array<Feature> }) => {

    const arrow = <svg className="fill-black dark:fill-white mt-1.5" width="20" height="20">
        <g transform="translate(-446 -398)">
            <path d=" M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272
    93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039
    99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728
    105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961
    103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)">
            </path>
        </g>
    </svg >

    return (
        <div className='fixed h-screen dark:bg-zinc-900 bg-white w-screen hiddenMenu mt-20 overflow-y-scroll' id='openMenu'>
            {data.features.map(f => {
                return (
                    <>
                        <div className='flex flex-row'>
                            <p className='pl-4 text-lg font-bold text-black dark:text-white'>
                                {f.featureTitle}
                            </p>
                            {arrow}
                        </div><div className=''>
                            <ul key={f.featureTitle} className='list-none mr-2'>
                                {f.sections.map(s => {
                                    return (
                                        s.sectionName === f.activeSectionName
                                            ? <Link to={s.href}><li key={s.sectionName} className='bg-yellow-300 text-black font-bold rounded-tr-xl rounded-br-xl p-2 pl-6'>{s.sectionName}</li></Link>
                                            : <Link to={s.href}><li key={s.sectionName} className='text-black dark:text-white rounded-tr-xl font-bold rounded-br-xl p-2 pl-6 hover:bg-slate-100 dark:hover:bg-zinc-800'>{s.sectionName}</li></Link>
                                    );
                                })}
                            </ul>
                        </div>
                    </>
                );
            })}
            {
                data.features[0].featureTitle !== 'Home'
                    ? <Link to={"/"}>
                        <button className='dark:bg-white dark:text-black hover:bg-yellow-300 dark:hover:bg-yellow-300 bg-black text-white hover:text-black rounded-tr-xl rounded-br-xl p-2 font-bold'>
                            Back to Home
                        </button>
                    </Link>
                    : null
            }
            <Social />
        </div>
    );
}

export default HiddenMenu;