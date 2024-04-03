import { Widget } from '../../imports.js';
import { SearchAndWindows } from "./overview.js";

export default () => Widget.Window({
    name: 'overview',
    exclusivity: 'normal',
    focusable: true,
    popup: true,
    visible: false,
    anchor: ['top'],
    child: Widget.Box({
        vertical: true,
        children: [
            SearchAndWindows(),
        ]
    }),
})
