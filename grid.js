#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Grid");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
grid.set_row_spacing(5);
grid.set_column_spacing(5);
grid.set_row_homogeneous(true);
grid.set_column_homogeneous(true);
window.add(grid);

let label = new Gtk.Label({label: "Position 0, 0"});
grid.attach(label, 0, 0, 1, 1);
let label = new Gtk.Label({label: "Position 0, 1"});
grid.attach(label, 0, 1, 1, 1);
let label = new Gtk.Label({label: "Position 1, 1 (2 wide)"});
grid.attach(label, 1, 1, 2, 1);
let label = new Gtk.Label({label: "Position 0, 2 (3 high)"});
grid.attach(label, 0, 2, 1, 3);

window.show_all();

Gtk.main();