import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARDS.TEXT',
    icon: 'bxs-dashboard',
    link: '/dashboard'
  },
  {
    id: 3,
    label: 'MENUITEMS.MASTERLISTS.TEXT',
    icon: 'bx-align-left',
    subItems: [
     {
        id: 4,
        label: 'MENUITEMS.MASTERLISTS.LIST.CUSTOMER',
        link: '/customers',
        parentId: 3,
        permissionId:[2,3]
      },
      {
        id: 5,
        label: 'MENUITEMS.MASTERLISTS.LIST.SUPPLIER',
        link: '/suppliers',
        parentId: 3,
        permissionId: [4,5]
      },
      {
        id: 6,
        label: 'MENUITEMS.MASTERLISTS.LIST.DEPARTMENT',
        link: '/department',
        parentId: 3,
        permissionId: [8, 9]      
      },
      {
        id: 7,
        label: 'MENUITEMS.MASTERLISTS.LIST.DEPARTMENTMANAGERS',
        link: '/department-managers',
        parentId: 3,
        permissionId: [6, 7]
      }
    ]
  },
  {
    id: 8,
    label: 'MENUITEMS.STOCKMANAGEMENT.TEXT',
    icon: 'bx-store',
    subItems: [
      {
        id: 9,
        label: 'MENUITEMS.STOCKMANAGEMENT.LIST.STOCK',
        link: '/stocklist',
        parentId: 8,
        permissionId: [12,13]
      },
      {
        id: 10,
        label: 'MENUITEMS.STOCKMANAGEMENT.LIST.TRANSFERSTOCK',
        link: '/stock-transfer',
        parentId: 8,
        permissionId: [55]
      },
      {
        id: 11,
        label: 'MENUITEMS.STOCKMANAGEMENT.LIST.DEPARTMENTSTOCK',
        link: '/department-stock',
        parentId: 8,
        permissionId: [14]
      },
      {
        id: 12,
        label: 'MENUITEMS.STOCKMANAGEMENT.LIST.LOCATIONSTOCK',
        link: '/location-stock',
        parentId: 8,
        permissionId: [50]
      },
      {
        id: 13,
        label: 'MENUITEMS.STOCKMANAGEMENT.LIST.GROUPINGSTOCK',
        link: '/grouping-stock',
        parentId: 8,
        permissionId: [53]
      },
      {
        id: 14,
        label: 'MENUITEMS.STOCKMANAGEMENT.LIST.CORRECTINGSTOCK',
        link: '/stock-correction',
        parentId: 8,
        permissionId: [16,17]
      }
    ]
  },
  {
    id: 15,
    label: 'MENUITEMS.PRICELOOKUP.TEXT',
    icon: 'bx-purchase-tag-alt',
    link: '/price-lookup',
    badge: {
      variant: 'danger',
      text: 'MENUITEMS.PRICELOOKUP.BADGE'
    },
    permissionId: [18,19,20,21,22]
  },
  {
    id: 16,
    label: 'MENUITEMS.PRODUCTS.TEXT',
    icon: 'bx-box',
    link: '/products',
    permissionId: [23,24]
  },
  {
    id: 17,
    label: 'MENUITEMS.PURCHASE.TEXT',
    icon: 'bx bx-archive',
    subItems: [
      {
        id: 18,
        label: 'MENUITEMS.ORDERS.TEXT',
        icon: 'bx-hash',
        link: '/orders',
        parentId: 17,
        permissionId: [58, 59]
      },
      {
        id: 19,
        label: 'MENUITEMS.GRN.TEXT',
        icon: 'bx-note',
        link: '/grn',
        parentId: 17,
        permissionId: [85, 86]
      },
      {
        id: 20,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bxs-file-plus',
        link: '/invoices',
        parentId: 17,
        permissionId: [72, 73]
      },
    ]
  },
  {
    id: 21,
    label: 'MENUITEMS.REPORTS.TEXT',
    icon: 'bx bx-receipt',
    subItems: [
      {
        id: 22,
        label: 'MENUITEMS.REPORTS.LIST.STOCKREPORT',
        link: '/stock-report',
        parentId: 21,
        permissionId: [25]
      },
      {
        id: 23,
        label: 'MENUITEMS.REPORTS.LIST.ORDERSREPORT',
        link: '/approved-orders-report',
        parentId: 21,
        permissionId: [69]
      },
      {
        id: 24,
        label: 'MENUITEMS.REPORTS.LIST.SERVICEREPORT',
        link: '/service-items-report',
        parentId: 21,
        permissionId: [87]
      },
      {
        id: 25,
        label: 'MENUITEMS.REPORTS.LIST.ONCEOFFREPORT',
        link: '/once-off-items-report',
        parentId: 21,
        permissionId: [88]
      },
      {
        id: 26,
        label: 'MENUITEMS.REPORTS.LIST.GLVATREPORT',
        link: '/gl-vat-report',
        parentId: 21,
        permissionId: [89]
      },
      {
        id: 27,
        label: 'MENUITEMS.REPORTS.LIST.CHARTREPORT',
        link: '/charts',
        parentId: 21,
        permissionId: [101]
      },
      {
        id: 28,
        label: 'MENUITEMS.REPORTS.LIST.STOCKRECIPES',
        link: '/stock-recipes',
        parentId: 21,
        permissionId: [103]
      }
    ]
  },
  {
    id: 29,
    label: 'MENUITEMS.FILEMANAGEMENT.TEXT',
    icon: 'bx bx-file',
    subItems: [
      {
        id: 30,
        label: 'MENUITEMS.FILEMANAGEMENT.LIST.ADDFILES',
        link: '/file-management',
        parentId: 29,
        permissionId: [62, 63]
      },
      {
        id: 31,
        label: 'MENUITEMS.FILEMANAGEMENT.LIST.IMPORTFILES',
        link: '/import-files',
        parentId: 29,
        permissionId: [64, 65]
      }
    ]
  },
  {
    id: 31,
    label: 'MENUITEMS.USERMANAGEMENT.TEXT',
    icon: 'bx-align-left',
    subItems: [
      {
        id: 33,
        label: 'MENUITEMS.USERMANAGEMENT.LIST.USERS',
        link: '/users',
        parentId: 32,
        permissionId: [23,27,28,29]
      },
      {
        id: 34,
        label: 'MENUITEMS.USERMANAGEMENT.LIST.ALLOCATIONPC',
        link: '/allocate-users',
        parentId: 32,
        permissionId: [30,31]
      },
      {
        id: 35,
        label: 'MENUITEMS.USERMANAGEMENT.LIST.ROLETEMP',
        link: '/roles',
        parentId: 31,
        permissionId: [32,33]
      },
      {
        id: 36,
        label: 'MENUITEMS.USERMANAGEMENT.LIST.ASSIGNROLES',
        link: '/assign-roles',
        parentId: 32,
        permissionId: [34,35]
      },
      {
        id: 37,
        label: 'MENUITEMS.USERMANAGEMENT.LIST.PERMISSIONS',
        link: '/permissions',
        parentId: 32,
        permissionId: [36,37]
      },      
    ]
  },
  {
    id: 38,
    label: 'MENUITEMS.OTHERS.TEXT',
    icon: 'bx-info-circle',
    subItems: [
      {
        id: 39,
        label: 'MENUITEMS.OTHERS.LIST.PHONEBOOK',
        link: '/phonelist',
        parentId: 38,
        permissionId: [90]
      },
      {
        id: 40,
        label: 'MENUITEMS.OTHERS.LIST.BIRTHDAY',
        link: '/birthdays',
        parentId: 38,
        permissionId: [91]
      }
    ]
  },
  {
    id: 41,
    label: 'MENUITEMS.SETTINGS.TEXT',
    icon: 'bx-cog',
    subItems: [
      {
        id: 42,
        label: 'MENUITEMS.SETTINGS.LIST.SYSTEMCONFIG',
        link: '/system-config',
        parentId: 41,
        subItems: [
          {
            id: 43,
            label: 'MENUITEMS.SETTINGS.LIST.STOCKCATEGORY',
            link: '/stock-category',
            parentId: 42,
            permissionId: [40, 41]
          },
          {
            id: 44,
            label: 'MENUITEMS.SETTINGS.LIST.UOM',
            link: '/unit-of-measurement',
            parentId: 42,
            permissionId: [42, 43]
          },
          {
            id: 45,
            label: 'MENUITEMS.SETTINGS.LIST.PAYMENTMETHOD',
            link: '/payment-method',
            parentId: 42,
            permissionId: [44, 45]
          },
          {
            id: 46,
            label: 'MENUITEMS.SETTINGS.LIST.EMPLOYEEPOSITION',
            link: '/employee-position',
            parentId: 42,
            permissionId: [46, 47]
          },
          {
            id: 47,
            label: 'MENUITEMS.SETTINGS.LIST.STOCKGROUP',
            link: '/stock-group',
            parentId: 42,
            permissionId: [51, 52]
          },
          {
            id: 48,
            label: 'MENUITEMS.SETTINGS.LIST.STORAGETYPE',
            link: '/storage-type',
            parentId: 42,
            permissionId: [56, 57]
          },
          {
            id: 49,
            label: 'MENUITEMS.SETTINGS.LIST.STORETYPE',
            link: '/store-type',
            parentId: 42,
            permissionId: [48, 49]
          },
          {
            id: 50,
            label: 'MENUITEMS.SETTINGS.LIST.PLANTLOCATION',
            link: '/plant-location',
            parentId: 42,
            permissionId: [70, 71]
          },
          {
            id: 51,
            label: 'MENUITEMS.SETTINGS.LIST.GLCODE',
            link: '/gl-code',
            parentId: 42,
            permissionId: [74, 75]
          },
          {
            id: 52,
            label: 'MENUITEMS.SETTINGS.LIST.COSTTYPE',
            link: '/cost-type',
            parentId: 42,
            permissionId: [76, 77]
          },
          {
            id: 53,
            label: 'MENUITEMS.SETTINGS.LIST.BANKNAME',
            link: '/bank-name',
            parentId: 42,
            permissionId: [80, 81]
          },
          {
            id: 54,
            label: 'MENUITEMS.SETTINGS.LIST.VAT',
            link: '/update-vat',
            parentId: 42,
            permissionId: [84]
          }
        ]
      }
    ]
  },
  {
    id: 55,
    label: 'MENUITEMS.STORES.TEXT',
    icon: 'bxs-dashboard',
    link: '/stores/dashboard',
    permissionId: [92]
  },
  {
    id: 56,
    label: 'MENUITEMS.LOGOUT.TEXT',
    icon: 'bx-log-in',
    link: '/account/login'
  }
];
