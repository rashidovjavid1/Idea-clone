export const navLinks = [
  { label: "About Us", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    isDropDown: true,
    subLinks: [
      {
        label: "Advocacy and Public Awareness",
        href: "/advocacy",
      },
      {
        label: "Wildlife Conservation and Animal Protection",
        href: "/wildlife",
      },
      {
        label: "Innovative Dialogue:Forums,Conferences,Special Events",
        href: "/innovative",
      },
      {
        label: "Public Engagement and Volunteer Action",
        href: "/public",
      },
      {
        label: "Education and Training",
        href: "/education",
      },
      {
        label: "Partnerships and Collaboration",
        href: "/partnership",
      },
    ],
  },
  { label: "National Parks", href: "/national-parks" },
  {
    label: "Media",
    href: "/media",
    isDropDown: true,
    subLinks: [
      { label: "Insights", href: "/insights" },
      {
        label: "Reports",
        href: "/reports",
      },
      {
        label: "Interesting Facts",
        href: "/facts",
      },
      {
        label: "Ecp calendar",
        href: "/eco-calendar",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
