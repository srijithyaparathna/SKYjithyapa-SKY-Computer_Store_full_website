import React from 'react'
import apple from './icon/ic_baseline-apple.png';
import asus from './icon/simple-icons_asus.png';
import msi from './icon/simple-icons_msibusiness.png'
import prosser from './icon/uil_processor.png'
import motherboard from './icon/bi_motherboard.png'
import memory from './icon/fluent_memory-16-filled.png'
import storag from './icon/ic_baseline-storage.png'
import cooling from './icon/game-icons_computer-fan.png'
import powersupply from './icon/pixelarticons_power.png'
import moniter from './icon/ph_monitor-duotone.png'
import keybordandmouse from './icon/emojione-v1_keyboard-and-mouse.png'


export const SidebarData = [
    {
        title: "APPLE",
        icon: <img src={apple} ></img>,
        link: "/products/apple"

    },
    {
        title: "ASUS",
        icon: <img src={asus} ></img>,
        link: "/products/asus"

    },
    {
        title: "MSI",
        icon: <img src={msi} ></img>,
        link: "/products/msi"

    },
    {
        title: "PROCESSORS",
        icon: <img src={prosser} ></img>,
        link: "/products/processors"

    },
    {
        title: "MOTHERBOARSDS",
        icon: <img src={motherboard} ></img>,
        link: "/products/motherboard"

    },
    {
        title: "MEMORY",
        icon: <img src={memory} ></img>,
        link: "/products/memory"

    },
    {
        title: "STORAGE",
        icon: <img src={storag} ></img>,
        link: "/products/storage"

    },
    {
        title: "COOLING",
        icon: <img src={cooling} ></img>,
        link: "/products/cooling"

    },
    {
        title: "POWERSUPPLY",
        icon: <img src={powersupply} ></img>,
        link: "/products/powersupply"
    },
    {
        title: "MONITORS",
        icon: <img src={moniter} ></img>,
        link: "/products/montors"

    },
    {
        title: "KEYBOARD & MOUSES   ",
        icon: <img src={keybordandmouse} ></img>,
        link: "/products/keybordandmouse"

    },



]
