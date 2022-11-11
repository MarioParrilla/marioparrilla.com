import { Link } from "react-router-dom";
import { Feature } from "../../types/feature";
import Social from "../social/Social";
import downArrow from '../../assets/down_arrow.svg';

const HiddenMenu = (data: { features: [Feature] }) => {
    return (
        <div className='fixed h-screen bg-white w-screen hiddenMenu mt-16' id='openMenu'>
            {data.features.map(f => {
                return (
                    <>
                        <div className='flex flex-row'>
                            <p className='pl-4 text-lg font-bold text-black'>
                                {f.featureTitle}
                            </p>
                            <img className='w-3 mt-1' src={downArrow} alt="downarrow" />
                        </div><div className=''>
                            <ul key={f.featureTitle} className='list-none mr-2'>
                                {f.sections.map(s => {
                                    return (
                                        s.sectionName === f.activeSectionName
                                            ? <Link to={s.href}><li key={s.sectionName} className='bg-yellow-300 text-black font-bold rounded-tr-xl rounded-br-xl p-2 pl-6'>{s.sectionName}</li></Link>
                                            : <Link to={s.href}><li key={s.sectionName} className='text-black rounded-tr-xl font-bold rounded-br-xl p-2 pl-6 hover:bg-slate-100 '>{s.sectionName}</li></Link>
                                    );
                                })}
                            </ul>
                            {
                                f.featureTitle !== 'Home'
                                    ? <Link to={"/"}>
                                        <button className='dark:bg-white dark:text-black dark:hover:bg-green-300 hover:bg-yellow-300 bg-black text-white hover:text-black rounded-tr-xl rounded-br-xl p-2 font-bold'>
                                            Back to Home
                                        </button>
                                    </Link>
                                    : null
                            }
                            <Social />
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default HiddenMenu;