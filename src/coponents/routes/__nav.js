

 const adminRoutes = [
  {
    path: '/admin',
    name: 'Admin',
    exact: true,
    component: <h1>Admin</h1>
  },
  {
    path: '/admin/menu',
    name: 'Menu',
    exact: true,
    component: <h1>MainMenu</h1>,
    elements:[
      {
        path: '/admin/menu1',
        name: 'Menu1',
        component: <h1>menu1</h1>,
      },
      {
        path: '/admin/menu2',
        name: 'Menu1',
        component: <h1>menu2</h1>,
      },
    ]
  },
  {
    path: '/admin/main',
    name: 'Main',
    exact: true,
    component: <h1>Main</h1>,
    elements:[
      {
        path: '/admin/main-cards1',
        name: 'Main Cards1',
        component: <h1>Main Cards1</h1>,
      },
      {
        path: '/admin/main-cards2',
        name: 'Main Cards2',
        component: <h1>Main Cards2</h1>,
      },
      {
        path: '/admin/main-slider',
        name: 'Main Slider',
        component: <h1>Main Slider</h1>,
      },
      {
        path: '/admin/different-cards',
        name: 'Different Cards',
        component: <h1>Different Cards1</h1>,
      },
      {
        path: '/admin/banks',
        name: 'Banks',
        component: <h1>Banks</h1>,
      },
    ]
  },
  {
    path: '/admin/about',
    name: 'About',
    exact: true,
    component: <h1>Admin</h1>,
    elements: [
      {
        path: '/admin/about1',
        name: 'About1',
        component: <h1>About1</h1>,
      },
      {
        path: '/admin/about2',
        name: 'About2',
        component: <h1>About2</h1>,
      },
    ]
  },
  {
    path: '/admin/contact',
    name: 'Contact',
    exact: true,
    component: <h1>Contact</h1>,
    
  },
  {
    path: '/admin/vacancy',
    name: 'Vacancy',
    exact: true,
    component: <h1>Vacancy</h1>,
    elements: [
      {
        path: '/admin/vacancy/header',
        name: 'Vacancy Header',
        component: <h1>Vacancy Header</h1>,
      },
      {
        path: '/admin/vacancy/items',
        name: 'Vacancy items',
        component: <h1>Vacancy items</h1>,
      },
    ]
  },

]
export default adminRoutes
