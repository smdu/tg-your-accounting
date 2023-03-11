export interface IRoute {
    path: string;
    link: string;
    title: string;
    Component: React.FC;
    hidden?: boolean;
    iconCls?: string;
}
