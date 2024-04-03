import { Widget } from '../../imports.js';
import { Search } from "./overview.js";

const clickOutsideToClose = Widget.EventBox({
    onPrimaryClick: () => App.closeWindow('search'),
    onSecondaryClick: () => App.closeWindow('search'),
    onMiddleClick: () => App.closeWindow('search'),
});


export default () => Widget.Window({
    name: 'search',
    exclusivity: 'normal',
    focusable: true,
    popup: true,
    visible: false,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({
                vertical: true,
                className: "",
                children: [
                    Search(),
                ]
            }),
        ],
    }),
})
