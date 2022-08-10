import React from 'react'
import { Avatar } from "flowbite-react";

const SideBar = () => {
    return (
        <div className='w-4/5 h-screen rounded-tr-[80px] rounded-br-[80px] bg-secondary md:w-1/5 z-10 absolute top-0 px-5 ' >
            <div className='flex items-center justify-between pt-20'>
                <div className="flex gap-3" >
                    <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        rounded={true}
                    />
                    <h1 className="font-normal text-white">
                        Hi!
                        <br /> Nombre Apellido
                    </h1>
                </div>

                <div>
                    <img src={require("../img/editar.png")} alt="" />
                </div>
            </div>

            <div className='flex items-center gap-4 mt-12'>
                <div><img src={require("../img/settings.png")} alt="" /></div>
                <p>Settings</p>
            </div>
            <div className='flex items-center gap-4 mt-8'>
                <div><img src={require("../img/Notification.png")} alt="" /></div>
                <p>Notification</p>
            </div>
            <div className='flex items-center gap-4 mt-8'>
                <div><img src={require("../img/activity.png")} alt="" /></div>
                <p>Activity</p>
            </div>
            <div className='flex items-center gap-4 mt-8'>
                <div><img src={require("../img/diamond.png")} alt="" /></div>
                <p>Subscription type</p>
            </div>
            <div className='flex items-center gap-4 mt-8'>
                <div><img src={require("../img/faq.png")} alt="" /></div>
                <p>FAQ</p>
            </div>
        </div>
    )
}

export default SideBar