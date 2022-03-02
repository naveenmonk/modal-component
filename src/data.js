import React from 'react';

import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    label: 'Home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    label: 'Team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    label: 'Projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    label: 'Calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    label: 'Documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.github.com',
    icon: <FaGithub />,
  },
  {
    id: 5,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
];
