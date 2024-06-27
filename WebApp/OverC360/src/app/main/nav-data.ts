export interface INavbarData {
    routerLink: string;
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
        routerLink: 'idMaster',
        src: './assets/sidebar/setting/Seting.png',
        srcDark: './assets/sidebar/setting/SetingDark.png',
        label: 'Setup',
        items: [
            {
                routerId: 2001,
                routerLink: 'setup/list',
                label: 'Setup-1',
                items: [
                    {
                        routerId: 3001,
                        routerLink: 'idMaster/language',
                        label: 'Language'
                    },
                    {
                        routerId: 3002,
                        routerLink: 'idMaster/company',
                        label: 'Company'
                    },
                    {
                        routerId: 3003,
                        routerLink: 'idMaster/country',
                        label: 'Country'
                    },
                    {
                        routerId: 3004,
                        routerLink: 'idMaster/menu',
                        label: 'Menu'
                    },
                    {
                        routerId: 3005,
                        routerLink: 'idMaster/product',
                        label: 'Product'
                    },
                    {
                        routerId: 5006,
                        routerLink: 'idMaster/notification',
                        label: 'Notification'
                    },
                ],
            },
            {
                routerId: 2002,
                routerLink: 'setup/list',
                label: 'Setup-2',
                items: [
                    {
                        routerId: 4001,
                        routerLink: 'idMaster/consignmentType',
                        label: 'Consignment Type'
                    },
                    {
                        routerId: 4002,
                        routerLink: 'idMaster/serviceType',
                        label: 'Service Type'
                    },
                    {
                        routerId: 4003,
                        routerLink: 'idMaster/status',
                        label: 'Status'
                    },
                    {
                        routerId: 4004,
                        routerLink: 'idMaster/city',
                        label: 'City'
                    },
                    {
                        routerId: 4005,
                        routerLink: 'idMaster/loadType',
                        label: 'Load Type'
                    },
                    {
                        routerId: 4006,
                        routerLink: 'idMaster/currency',
                        label: 'Currency'
                    },
                ]
            },
            {
                routerId: 2003,
                routerLink: 'setup/list',
                label: 'Setup-3',
                items: [
                    {
                        routerId: 5001,
                        routerLink: 'idMaster/subProduct',
                        label: 'Sub Product'
                    },
                    {
                        routerId: 5002,
                        routerLink: 'idMaster/module',
                        label: 'Module'
                    },
                    {
                        routerId: 5003,
                        routerLink: 'idMaster/province',
                        label: 'Province'
                    },
                    {
                        routerId: 5004,
                        routerLink: 'idMaster/district',
                        label: 'District'
                    },
                    {
                        routerId: 5005,
                        routerLink: 'idMaster/users',
                        label: 'Users'
                    },
                    {
                        routerId: 5006,
                        routerLink: 'idMaster/userrole',
                        label: 'User Role'
                    },
                ]
            },
        ]
    },
    {
        routerId: 1000,
        routerLink: 'masters',
        src: './assets/sidebar/masters/Database.png',
        srcDark: './assets/sidebar/masters/DatabaseDark.png',
        label: 'Masters',
        items: [
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Master1',
                items: [
                    {
                        routerId: 1001,
                        routerLink: 'idMaster/iata',
                        label: 'Iata'
                    },
                    {
                        routerId: 1002,
                        routerLink: 'idMaster/specialApproval',
                        label: 'Special Approval'
                    },
                    {
                        routerId: 1003,
                        routerLink: 'idMaster/hsCode',
                        label: 'HS Code'
                    },
                    {
                        routerId: 1004,
                        routerLink: 'idMaster/customer',
                        label: 'Customer'
                    },
                    {
                        routerId: 1005,
                        routerLink: 'idMaster/consignor',
                        label: 'Consignor'
                    },
                    {
                        routerId: 1006,
                        routerLink: 'idMaster/event',
                        label: 'Event'
                    },
                ]
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Master2',
                items: [
                    {
                        routerId: 1001,
                        routerLink: 'idMaster/numberrange',
                        label: 'Number Range'
                    },
                    {
                        routerId: 1002,
                        routerLink: 'idMaster/opstatus',
                        label: 'Op Status'
                    },
                    {
                        routerId: 1003,
                        routerLink: 'idMaster/currencyExchangeRate',
                        label: 'Currency Exchange Rate'
                    },
                    {
                        routerId: 1004,
                        routerLink: 'idMaster/cityMapping',
                        label: 'City Mapping'
                    },
                    {
                        routerId: 1005,
                        routerLink: 'idMaster/countryMapping',
                        label: 'Country Mapping'
                    },
                    {
                        routerId: 1006,
                        routerLink: 'idMaster/districtMapping',
                        label: 'District Mapping'
                    },
                ]
            },
            {
                routerId: 1000,
                routerLink: 'setup/list',
                label: 'Master3',
                items: [
                    {
                        routerId: 1001,
                        routerLink: 'idMaster/provinceMapping',
                        label: 'Province Mapping'
                    },
                    {
                        routerId: 1002,
                        routerLink: 'idMaster/hub',
                        label: 'Hub'
                    },
                    {
                        routerId: 1003,
                        routerLink: 'idMaster/rate',
                        label: 'Rate'
                    },
                    {
                        routerId: 1004,
                        routerLink: 'idMaster/hubPartnerAssignment',
                        label: 'Hub Partner Assignment'
                    },
                ]
            },
        ]
    },
    {
        routerId: 1000,
        routerLink: 'masters',
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
        routerLink: 'dashboard',
        src: './assets/sidebar/airport/Airport Hub.png',
        srcDark: './assets/sidebar/airport/Airport HubDark.png',
        label: 'Airport',
        items: [
            {
                routerId: 4001,
                routerLink: '/main/airport/preAlertManifest',
                label: 'Pre-Alert Manifest'
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