#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("Toolbar");
window.set_default_size(-1, 200);
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var toolbar = new Gtk.Toolbar();
toolbar.set_vexpand(false);
toolbar.set_hexpand(true);
grid.attach(toolbar, 0, 0, 1, 1);

var toolbutton1 = new Gtk.ToolButton({label: "Play"});
toolbar.add(toolbutton1);

var toolbutton2 = new Gtk.ToggleToolButton({label: "Pause"});
toolbar.add(toolbutton2);

var toolbutton3 = new Gtk.RadioToolButton({label: "Rewind"});
toolbutton3.set_icon_name("gtk-media-rewind");
toolbar.add(toolbutton3);
var toolbutton4 = new Gtk.RadioToolButton({label: "Fast Forward",
                                           group: toolbutton3});
toolbutton4.set_icon_name("gtk-media-forward");
toolbar.add(toolbutton4);

var toolbutton5 = new Gtk.MenuToolButton({label: "History"});
toolbar.add(toolbutton5);
var menu = new Gtk.Menu();
toolbutton5.set_menu(menu);
var menuitem = new Gtk.MenuItem({label: "MenuItem"});
menu.append(menuitem);
menuitem.show();

window.show_all();

Gtk.main();
