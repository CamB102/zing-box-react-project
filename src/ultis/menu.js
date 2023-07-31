import icons from "./icons"

const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie } = icons

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'My Music',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Explore',
        end: true,
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'lala-chart',
        text: 'Lala Chart',
        icons: <HiOutlineChartPie size={24} />
    },
    {
        path: 'follow',
        text: 'Follow',
        icons: <MdOutlineFeed size={24} />
    },
]