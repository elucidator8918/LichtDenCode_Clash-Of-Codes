import {DiAndroid} from 'react-icons/di' 
import { FaBeer } from 'react-icons/fa';

const Sidebar  =()=>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow">
            <SidebarIcon icon ={<FaBeer size="28"/>}/>
            <SidebarIcon icon ={<DiAndroid size="28"/>}/>
            <i className='sidebar-icon'>A</i>
        </div>
    )
}
const SidebarIcon =({icon})=>{
   return (<div className="sidebar-icon">
        {icon}
    </div>)

}
export default Sidebar;
