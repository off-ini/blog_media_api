import React from 'react';

/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
const FirstDashboard = React.lazy(() => import('../views/starter/starter.jsx' ));
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/


const Users = React.lazy(() => import('../views/users/index.jsx' ));
const Categorie = React.lazy(() => import('../views/categorie/index.jsx' ));
const Album = React.lazy(() => import('../views/album/index.jsx' ));
const Image = React.lazy(() => import('../views/image/index.jsx' ));
const ImageCreate = React.lazy(() => import('../views/image/create.jsx' ));
const Video = React.lazy(() => import('../views/video/index.jsx' ));
const VideoCreate = React.lazy(() => import('../views/video/create.jsx' ));

var ThemeRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'mdi mdi-adjust',
        component: FirstDashboard
    },
    {
        path: '/videos/add',
        name: 'VideoCerate',
        component: VideoCreate
    },
    {
        path: '/videos',
        name: 'Videos',
        icon: 'mdi mdi-file-video',
        component: Video
    },
    {
        path: '/images/add/:album_id',
        name: 'ImageCerate',
        component: ImageCreate
    },
    {
        path: '/images/add',
        name: 'ImageCerate',
        component: ImageCreate
    },
    {
        path: '/images',
        name: 'Images',
        icon: 'mdi mdi-file-image',
        component: Image
    },
    {
        path: '/albums',
        name: 'Albums',
        icon: 'mdi mdi-image-filter',
        component: Album
    },
    {
        path: '/categories',
        name: 'Categories',
        icon: 'mdi mdi-ungroup',
        component: Categorie
    },
    {
        path: '/users',
        name: 'Users',
        icon: 'mdi mdi-account-multiple',
        component: Users
    },
    {
        path: '/',
        pathTo: '/dashboard',
        name: 'Dashboard',
        redirect: true
    }
];
export default ThemeRoutes;
