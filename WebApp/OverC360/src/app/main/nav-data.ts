export interface INavbarData {
    routerLink?: string;
    routerId: number;
    src?: string;
    srcDark?: string;
    label: string;
    expanded?: boolean;
    items?: INavbarData[];
}

export const navbarData: INavbarData[] = [
    {
        routerId: 1000,
        routerLink: 'dashboard',
        src: './assets/sidebar/dashboard/DashboardLight.png',
        srcDark: './assets/sidebar/dashboard/Dashboard.png',
        label: 'Dashboard'
    },
    {
        routerId: 2000,
        routerLink: '/main/idMaster',
        src: './assets/sidebar/setting/Seting.png',
        srcDark: './assets/sidebar/setting/SetingDark.png',
        label: 'Setup',
        items: [
            {
                routerId: 2001,
                // routerLink: 'setup/list',
                label: 'Admin',
                items: [
                    {
                        routerId: 2101,
                        routerLink: '/main/idMaster/language',
                        label: 'Language'
                    },
                    {
                        routerId: 2102,
                        routerLink: '/main/idMaster/status',
                        label: 'Status'
                    },
                    {
                        routerId: 2103,
                        routerLink: '/main/idMaster/currency',
                        label: 'Currency'
                    },
                    {
                        routerId: 2104,
                        routerLink: '/main/idMaster/menu',
                        label: 'Menu'
                    },
                    {
                        routerId: 2105,
                        routerLink: '/main/idMaster/module',
                        label: 'Module'
                    },
                    {
                        routerId: 2106,
                        routerLink: '/main/idMaster/userRole',
                        label: 'User Role'
                    },
                    {
                        routerId: 2107,
                        routerLink: '/main/idMaster/userProfile',
                        label: 'User Profile'
                    },
                    {
                        routerId: 2108,
                        routerLink: '/main/idMaster/notification',
                        label: 'Notification'
                    },
                    {
                        routerId: 2109,
                        routerLink: '/main/idMaster/numberRange',
                        label: 'User Role'
                    },
                    {
                        routerId: 2110,
                        routerLink: '/main/idMaster/hub',
                        label: 'Hub'
                    },
                    {
                        routerId: 2111,
                        routerLink: '/main/idMaster/appUser',
                        label: 'App User'
                    },

                ],
            },
            {
                routerId: 2002,
                // routerLink: 'setup/list',
                label: 'Organization',
                items: [
                    {
                        routerId: 2201,
                        routerLink: '/main/idMaster/company',
                        label: 'Company'
                    },
                    {
                        routerId: 2202,
                        routerLink: '/main/idMaster/product',
                        label: 'Product'
                    },
                    {
                        routerId: 2203,
                        routerLink: '/main/idMaster/subProduct',
                        label: 'Sub Product'
                    },
                    {
                        routerId: 2204,
                        routerLink: '/main/idMaster/country',
                        label: 'Country'
                    },
                    {
                        routerId: 2205,
                        routerLink: '/main/idMaster/province',
                        label: 'Province'
                    },
                    {
                        routerId: 2206,
                        routerLink: '/main/idMaster/district',
                        label: 'District'
                    },
                    {
                        routerId: 2207,
                        routerLink: '/main/idMaster/city',
                        label: 'City'
                    },
                ]
            },
           
        ]
    },
    {
        routerId: 3000,
        routerLink: '/main/master',
        src: './assets/sidebar/masters/Database.png',
        srcDark: './assets/sidebar/masters/DatabaseDark.png',
        label: 'Masters',
        items: [
            {
                routerId: 2003,
                // routerLink: 'setup/list',
                label: 'Operations',
                items: [
                    {
                        routerId: 2301,
                        routerLink: '/main/master/opStatus',
                        label: 'Op Stauts'
                    },
                    {
                        routerId: 2302,
                        routerLink: '/main/master/event',
                        label: 'Event'
                    },
                    {
                        routerId: 2303,
                        routerLink: '/main/master/customer',
                        label: 'Customer'
                    },
                    {
                        routerId: 2304,
                        routerLink: '/main/master/consignor',
                        label: 'Consignor'
                    },
                    {
                        routerId: 2305,
                        routerLink: '/main/master/hubPartnerAssignment',
                        label: 'Hub Partner Assignment'
                    },
                    {
                        routerId: 2306,
                        routerLink: '/main/master/cityMapping',
                        label: 'City Mapping'
                    },
                    {
                        routerId: 2307,
                        routerLink: '/main/master/districtMapping',
                        label: 'District Mapping'
                    },
                    {
                        routerId: 2308,
                        routerLink: '/main/master/provinceMapping',
                        label: 'Province Mapping'
                    },
                    {
                        routerId: 2309,
                        routerLink: '/main/master/countryMapping',
                        label: 'Country Mapping'
                    },
                    {
                        routerId: 2310,
                        routerLink: '/main/idMaster/route',
                        label: 'Route'
                    },
                    {
                        routerId: 2311,
                        routerLink: '/main/idMaster/vehicle',
                        label: 'Vehicle'
                    },
                    
                ]
            },
            {
                routerId: 1000,
                // routerLink: 'setup/list',
                label: 'Master1',
                items: [
                    {
                        routerId: 1001,
                        routerLink: '/main/master/iata',
                        label: 'IATA'
                    },
                    {
                        routerId: 1002,
                        routerLink: '/main/master/specialApproval',
                        label: 'Special Approval'
                    },
                    {
                        routerId: 1003,
                        routerLink: '/main/master/hsCode',
                        label: 'HS Code'
                    },
                    {
                        routerId: 1004,
                        routerLink: '/main/master/customer',
                        label: 'Customer'
                    },
                    {
                        routerId: 1005,
                        routerLink: '/main/master/consignor',
                        label: 'Consignor'
                    },
                    {
                        routerId: 1006,
                        routerLink: '/main/master/event',
                        label: 'Event'
                    },
                ]
            },
            {
                routerId: 1000,
                // routerLink: 'setup/list',
                label: 'Master2',
                items: [
                    {
                        routerId: 1001,
                        routerLink: '/main/master/numberrange',
                        label: 'Number Range'
                    },
                    {
                        routerId: 1002,
                        routerLink: '/main/master/opstatus',
                        label: 'Op Status'
                    },
                    {
                        routerId: 1003,
                        routerLink: '/main/master/currencyExchangeRate',
                        label: 'Currency Exchange Rate'
                    },
                    {
                        routerId: 1004,
                        routerLink: '/main/master/cityMapping',
                        label: 'City Mapping'
                    },
                    {
                        routerId: 1005,
                        routerLink: '/main/master/countryMapping',
                        label: 'Country Mapping'
                    },
                    {
                        routerId: 1006,
                        routerLink: '/main/master/districtMapping',
                        label: 'District Mapping'
                    },
                ]
            },
            {
                routerId: 1000,
                // routerLink: 'setup/list',
                label: 'Master3',
                items: [
                    {
                        routerId: 1001,
                        routerLink: '/main/master/provinceMapping',
                        label: 'Province Mapping'
                    },
                    {
                        routerId: 1002,
                        routerLink: '/main/master/hub',
                        label: 'Hub'
                    },
                    {
                        routerId: 1003,
                        routerLink: '/main/master/rate',
                        label: 'Rate'
                    },
                    {
                        routerId: 1004,
                        routerLink: '/main/master/hubPartnerAssignment',
                        label: 'Hub Partner Assignment'
                    },
                ]
            },
        ]
    },
    {
        routerId: 1000,
        routerLink: 'master',
        src: './assets/sidebar/service/Service.png',
        srcDark: './assets/sidebar/service/ServiceDark.png',
        label: 'Customer',
        items: [
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Rates'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Users'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Product'
            },
        ]
    },
    {
        routerId: 4000,
        routerLink: '/main/airport',
        src: './assets/sidebar/airport/Airport Hub.png',
        srcDark: './assets/sidebar/airport/Airport HubDark.png',
        label: 'Airport',
        items: [
            {
                routerId: 4001,
                routerLink: '/main/airport/preAlertManifest',
                label: 'Pre-Alert Manifest'
            },
            {
                routerId: 4002,
                routerLink: '/main/airport/console',
                label: 'Console'
            },
            {
                routerId: 4003,
                routerLink: '/main/airport/bondedManifest',
                label: 'Bonded Manifest'
            },
            {
                routerId: 4004,
                routerLink: '/main/airport/ccr',
                label: 'CCR'
            }
        ]
    },
    {
        routerId: 5000,
        routerLink: 'dashboard',
        src: './assets/sidebar/operations/oprations.png',
        srcDark: './assets/sidebar/operations/oprationsDark.png',
        label: 'Operations',
        items: [
            {
                routerId: 5001,
                routerLink: '/main/operation/consignment',
                label: 'Consignment'
            }
        ]
    },
    {
        routerId: 1000,
        routerLink: 'masters',
        src: './assets/sidebar/billing/billing.png',
        srcDark: './assets/sidebar/billing/billingDark.png',
        label: 'Billing',
        items: [
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Rates'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Users'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Product'
            },
        ]
    },
    {
        routerId: 1000,
        routerLink: 'masters',
        src: './assets/sidebar/integration/Integration.png',
        srcDark: './assets/sidebar/integration/IntegrationDark.png',
        label: 'Integration',
        items: [
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Rates'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Users'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Product'
            },
        ]
    },
    {
        routerId: 1000,
        routerLink: 'masters',
        src: './assets/sidebar/reports/report.png',
        srcDark: './assets/sidebar/reports/reportDark.png',
        label: 'Reports',
        items: [
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Rates'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Users'
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Product'
            },
        ]
    },

];