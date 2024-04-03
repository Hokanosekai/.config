import { App, Service, Utils, Widget } from '../../imports.js';
const { execAsync } = Utils;
import Todo from "../../services/todo.js";

export const customCommandsList = [
  {
    'name': 'shutdown',
    'aliases': ['shd'],
    'title': 'Shutdown',
    'icon' : null,
    'cmd': ['bash', '-c', 'systemctl poweroff'],
    'launch': (cmd, args) => {
      execAsync(cmd).catch(print)
    }
  },
  {
    'name': 'reboot',
    'aliases': ['rbt'],
    'title': 'Reboot',
    'icon' : null,
    'cmd': ['bash', '-c', 'systemctl reboot'],
    'launch': (cmd, args) => {
      execAsync(cmd).catch(print)
    }
  },
  {
    'name': 'sleep',
    'aliases': ['slp'],
    'title': 'Sleep',
    'icon' : null,
    'cmd': ['bash', '-c', 'systemctl suspend'],
    'launch': (cmd, args) => {
      execAsync(cmd).catch(print)
    }
  },
  {
    'name': 'logout',
    'aliases': ['lgt'],
    'title': 'Logout',
    'icon' : null,
    'cmd': ['bash', '-c', 'loginctl terminate-user $USER'],
    'launch': (cmd, args) => {
      execAsync(cmd).catch(print)
    }
  },
  {
    'name': 'todo',
    'aliases': ['td'],
    'title': 'Todo',
    'icon' : null,
    'cmd': null,
    'launch': (cmd, args) => {
      Todo.add(args.join(' '));
    }
  },
  {
    'name': 'color',
    'aliases': ['clr'],
    'title': 'Color',
    'icon' : null,
    'cmd': [`bash`, `-c`, `${App.configDir}/scripts/color_generation/switchcolor.sh`, `&`] ,
    'launch': (cmd, args) => {
      execAsync(cmd).catch(print)
    }
  },
  {
    'name': 'img',
    'aliases': ['img'],
    'title': 'Image',
    'icon' : null,
    'cmd': [`bash`, `-c`, `${App.configDir}/scripts/color_generation/switchwall.sh`, `&`] ,
    'launch': (cmd, args) => {
      execAsync(cmd).catch(print)
    }
  }
]